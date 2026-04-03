"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {
  const [showAll, setShowAll] = useState(false);

  const visibleLocations = showAll ? locations : locations.slice(0, 50);

  return (
    <footer className="bg-[#111827] pt-16 pb-8 px-4 border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto">

        {/* <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            House for Sale in{" "}
            <span className="text-[#F97316]">Faridabad</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Discover premium residential properties across prime sectors of Faridabad.
          </p>
        </div> */}

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-white mb-6">
          House Available for Sale in Popular Locations 
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm">

            {visibleLocations.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  href={`/${createSlug(loc)}`}
                  className="block truncate text-gray-400 hover:text-[#F97316] transition duration-200"
                >
                  House For Sale {loc}
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200 ease-out whitespace-nowrap
                  bg-[#1F2937] text-white text-xs px-3 py-1.5 rounded-md
                  shadow-lg border border-[#F97316]/40 z-[9999] pointer-events-none">
                  House For Sale {loc}
                </div>

              </div>
            ))}

            {!showAll && (
              <div className="relative group">
                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-[#F97316] hover:underline transition"
                >
                  View More...
                </span>
              </div>
            )}

            {showAll && (
              <div className="relative group">
                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#F97316] hover:underline transition"
                >
                  View Less...
                </span>
              </div>
            )}

          </div>
        </div>

        <div className="border-t border-[#1F2937] pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} ShopForSaleInFaridabad.com
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
  Designed By - {" "}
  <Link
    href="https://www.parcharmanch.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#F97316] transition cursor-pointer underline-offset-4 hover:underline"
  >
    Parchar Manch
  </Link>
</p>
        </div>

      </div>
    </footer>
  );
}