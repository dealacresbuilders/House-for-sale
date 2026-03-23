"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function BHKFilterButtons() {
  const bhkOptions = ["1", "2", "3", "4"];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
      {bhkOptions.map((bhk) => (
        <Link
          key={bhk}
          href={`/type/${bhk}`}
          className="px-3 sm:px-6 py-2 sm:py-3 rounded-full 
          text-xs sm:text-sm md:text-base font-medium 
          border border-[#EA580C] text-[#EA580C] 
          hover:bg-[#EA580C] hover:text-white 
          transition-all duration-200 text-center break-words"
        >
          House for Sale {bhk} BHK
        </Link>
      ))}
    </div>
  );
}