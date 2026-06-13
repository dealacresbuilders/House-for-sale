"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PropertyViewButton({
  slug,
  className,
  text = "View Details",
}) {

  const [todayViews, setTodayViews] = useState(0);

  // 🔥 START DATE
  const startDate = new Date("2026-05-21");

  // 📅 TODAY
  const todayDate = new Date();

  // 🔥 DIFFERENCE IN DAYS
  const diffTime =
    todayDate.getTime() - startDate.getTime();

  const diffDays = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );

  // 🔥 AUTO DAILY INCREASE
  const dailyLimit = 100 + diffDays * 100;
/>

  // 🔥 TODAY KEY
  const today =
    todayDate.toISOString().split("T")[0];

  // ✅ LOAD SAVED DATA
  useEffect(() => {

    const savedDate =
      localStorage.getItem("viewDate");

    const savedViews =
      localStorage.getItem("todayViews");

    // 🔥 NEW DAY RESET
    if (savedDate !== today) {

      localStorage.setItem("viewDate", today);

      localStorage.setItem("todayViews", "0");

      setTodayViews(0);

    } else {

      setTodayViews(
        Number(savedViews || 0)
      );

    }

  }, [today]);

  // 🔥 HANDLE CLICK
  const handleViewClick = (e) => {

    const currentViews = Number(
      localStorage.getItem("todayViews") || 0
    );

    // 🔥 LIMIT REACHED
    if (currentViews >= dailyLimit) {

      e.preventDefault();

      return;
    }

    const updatedViews = currentViews + 1;

    // ✅ SAVE
    localStorage.setItem(
      "todayViews",
      updatedViews.toString()
    );

    // ✅ UPDATE STATE
    setTodayViews(updatedViews);
  };

  return (
    <Link
      href={`https://www.dealacres.com/property/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleViewClick}
      className={className}
    >
      {text}
    </Link>
  );
}