"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PropertyViewButton({
  slug,
  className,
  text = "View Details",
}) {
  const [todayViews, setTodayViews] = useState(0);
  const [isToday, setIsToday] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 🔥 1st HOOK: Slug ke andar se MongoDB ID nikal kar check karna
 // 🔥 1st HOOK: Slug ke andar se MongoDB ID nikal kar check karna
  useEffect(() => {
    setIsMounted(true);
    if (!slug) return;

    try {
      const match = slug.match(/[0-9a-fA-F]{24}$/);
      if (match) {
        const objectId = match[0];
        const timestamp = parseInt(objectId.substring(0, 8), 16) * 1000;
        
        // 🔥 NAYA CHECK: Agar property 5 August 2026 ya uske baad ki hai, toh hide kar do!
        const targetDate = new Date("2026-08-05").getTime();

        if (timestamp >= targetDate) {
          setIsToday(true);
        }
      }
    } catch (error) {
      console.error("Error extracting date from slug:", error);
    }
  }, [slug]);

  // 🔥 START DATE & CALCULATIONS
  const startDate = new Date("2026-05-21");
  const todayDate = new Date();
  const diffTime = todayDate.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const dailyLimit = 100 + diffDays * 100;
  const today = todayDate.toISOString().split("T")[0];

  // 🔥 2nd HOOK: Load saved data from localStorage
  useEffect(() => {
    const savedDate = localStorage.getItem("viewDate");
    const savedViews = localStorage.getItem("todayViews");

    if (savedDate !== today) {
      localStorage.setItem("viewDate", today);
      localStorage.setItem("todayViews", "0");
      setTodayViews(0);
    } else {
      setTodayViews(Number(savedViews || 0));
    }
  }, [today]);

  // 🔥 HANDLE CLICK
  const handleViewClick = (e) => {
    const currentViews = Number(localStorage.getItem("todayViews") || 0);

    if (currentViews >= dailyLimit) {
      e.preventDefault();
      return;
    }

    const updatedViews = currentViews + 1;
    localStorage.setItem("todayViews", updatedViews.toString());
    setTodayViews(updatedViews);
  };

  // 🔥 2. CONDITIONAL RETURN HAMESHA SABSE NEECHE (Saare hooks ke baad)
  if (!isMounted || isToday) {
    return null;
  }

  return (
    <Link
      href={"#"
/* original: `https://www.dealacres.com/property/${slug}` */}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleViewClick}
      className={`${className}`}
    >
      {text}
    </Link>
  );
}