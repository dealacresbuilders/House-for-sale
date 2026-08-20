"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { locations } from "../data/newLocations";

const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {
  const [visibleCounts, setVisibleCounts] = useState({});

  useEffect(() => {
    const counts = {};

    locations.forEach((item) => {
      const key = Object.keys(item)[0];
      counts[key] = 15;
    });

    setVisibleCounts(counts);
  }, []);

  const handleViewMore = (type) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 15,
    }));
  };

  const handleViewLess = (type) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [type]: 15,
    }));
  };

  const getSaleLabel = (bhkType) => {
    switch (bhkType.toLowerCase()) {
      case "1 bhk":
        return "1 BHK House For Sale in";

      case "2 bhk":
        return "2 BHK House For Sale in";

      case "3 bhk":
        return "3 BHK House For Sale in";

      case "4 bhk":
        return "4 BHK House For Sale in";

      default:
        return "House For Sale in";
    }
  };

  const getSaleUrl = (bhkType, location) => {
    switch (bhkType.toLowerCase()) {
      case "1 bhk":
        return "#"
/* original: `https://www.dealacres.com/properties/1-bhk-house-for-sale-in-${createSlug(
          location
        )}-faridabad` */;

      case "2 bhk":
        return "#"
/* original: `https://www.dealacres.com/properties/2-bhk-house-for-sale-in-${createSlug(
          location
        )}-faridabad` */;

      case "3 bhk":
        return "#"
/* original: `https://www.dealacres.com/properties/3-bhk-house-for-sale-in-${createSlug(
          location
        )}-faridabad` */;

      case "4 bhk":
        return "#"
/* original: `https://www.dealacres.com/properties/4-bhk-house-for-sale-in-${createSlug(
          location
        )}-faridabad` */;

      default:
        return "#"
/* original: `https://www.dealacres.com/properties/house-for-sale-in-${createSlug(
          location
        )}-faridabad` */;
    }
  };

  return (
    <footer className="bg-[#111827] pt-16 pb-8 px-4 border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            House for Sale in{" "}
            <span className="text-[#F97316]">Faridabad</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Discover premium residential properties across prime sectors of
            Faridabad.
          </p>
        </div>

        {/* BHK Sections */}
        {locations.map((item, index) => {
          const bhkType = Object.keys(item)[0];
          const bhkLocations = item[bhkType];

          return (
            <div key={index} className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-6">
                House Available for Sale in Popular{" "}
                {bhkType.replace("bhk", " BHK").toUpperCase()} Locations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm">
                {bhkLocations
                  .slice(0, visibleCounts[bhkType] || 15)
                  .map((loc, idx) => (
                    <div
                      key={idx}
                      className="relative group overflow-visible"
                    >
                      <Link
                        href={getSaleUrl(bhkType, loc)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate text-gray-400 hover:text-[#F97316] transition duration-200"
                      >
                        {getSaleLabel(bhkType)} {loc}
                      </Link>

                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                          opacity-0 scale-95
                          group-hover:opacity-100 group-hover:scale-100
                          transition-all duration-200 ease-out
                          whitespace-nowrap
                          bg-[#1F2937]
                          text-white text-xs
                          px-3 py-1.5 rounded-md
                          shadow-lg
                          border border-[#F97316]/40
                          z-[9999]
                          pointer-events-none
                        "
                      >
                        {getSaleLabel(bhkType)} {loc}
                      </div>
                    </div>
                  ))}
              </div>

              {/* View More / Less */}
              <div className="mt-4 flex gap-4">
                {(visibleCounts[bhkType] || 15) <
                  bhkLocations.length && (
                  <button
                    onClick={() => handleViewMore(bhkType)}
                    className="text-[#F97316] hover:underline transition"
                  >
                    View More...
                  </button>
                )}

                {(visibleCounts[bhkType] || 15) > 15 && (
                  <button
                    onClick={() => handleViewLess(bhkType)}
                    className="text-[#F97316] hover:underline transition"
                  >
                    View Less...
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* Bottom Navigation */}
        <div className="border-t border-[#1F2937] pt-6 mt-6 mb-6">
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <Link
                href="/about"
                className="text-gray-400 hover:text-[#F97316] transition"
              >
                About
              </Link>

              <Link
                href="/blog"
                className="text-gray-400 hover:text-[#F97316] transition"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-gray-400 hover:text-[#F97316] transition"
              >
                Contact
              </Link>

              <Link
                href="/how-it-works"
                className="text-gray-400 hover:text-[#F97316] transition"
              >
                How It's Work
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#1F2937] pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} ShopForSaleInFaridabad.com
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed By -{" "}
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
