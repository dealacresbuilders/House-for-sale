"use client";

import { useState } from "react";
import Link from "next/link";

const locations = [
  // 🔥 TERA SAME FULL LOCATIONS ARRAY YAHI RAHEGA (unchanged)
  '30 foot road, Faridabad',
  'A block Dabua colony, Faridabad',
  'Adarsh Nagar, Faridabad',
  'Agwanpur, Faridabad',
  'Ajay Nagar, Faridabad',
  'Ajronda, Faridabad',
  'Ankhir, Faridabad',
  'Aravali Vihar, Faridabad',
  'Arya Nagar Uncha Gaon, Faridabad',
  'Ashoka Enclave Part 1, Faridabad',
  'Ashoka Enclave Part 2, Faridabad',
  'Ashoka Enclave Part 3, Faridabad',
  'Ashoka Enclave, Faridabad',
  'Atmadpur Village, Faridabad',
  'BPTP ELITE FLOOR BLOCK L Sector 84 Faridabad',
  'BPTP, Faridabad',
  'Badarpur Said, Faridabad',
  'Badkhal, Faridabad',
  'Balaji mandir wali gali, Faridabad',
  'Ballabhgarh, Faridabad',
  'Basantpur, Faridabad',
  'Basilva Colony, Faridabad',
  'Bhagat Singh Colony, Faridabad',
  'Bhanakpur, Faridabad',
  'Bharat Colony, Faridabad',
  'Bhatia Colony, Faridabad',
  'Bhim Sen Colony, Faridabad',
  'Bhim basti, Faridabad',
  'Bhoor Colony, Faridabad',
  'Bhopani Village, Faridabad',
  'Block 6 Block F Springfield Colony, Faridabad',
  'Block B Dabua Colony, Faridabad',
  'Block B New Industrial Township 1, Faridabad',
  'Block B, Sector 7, Faridabad',
  'Block C Dabua Colony, Faridabad',
  'Block D Dabua Colony, Faridabad',
  'Block D New Industrial Twp 3, Faridabad',
  'Block D Sector 7 Faridabd, Faridabad',
  'Block E Dabua Colony, Faridabad',
  'Block E New Industrial Twp 3, Faridabad',
  'Block E New Industrial Twp, Faridabad',
  'Block F Sector 10, Faridabad',
  'Block H New Industrial Twp 3, Faridabad',
  'Block J New Industrial Township 5, Faridabad',
  'Block K New Industrial Township 1, Faridabad',
  'Block M New Industrial Township 5, Faridabad',
  'Block-E, Sector-7, Faridabad',
  'Block-S Sector 75, Faridabad',
  'Chacha Chowk, Faridabad',
  'Charmwood Village, Faridabad',
  'Chawla Colony, Faridabad',
  'Dabua Colony, Faridabad',
  'Dayal Basti Village, Faridabad',
  'Dheeraj Nagar, Faridabad',
  'E Block Sector 85, Faridabad',
  'Faridpur, Faridabad',
  'Fatehpur Chandela, Faridabad',
  'Fatehpur Taga, Faridabad',
  'Fruit Garden, Faridabad',
  'Gandhi Colony, Faridabad',
  'Garg Colony, Faridabad',
  'Gaunchhi Gram Village, Faridabad',
  'Gopi Colony, Faridabad',
  'Greenfield Colony Block B, Faridabad',
  'Greenfield Colony, Faridabad',
  'Greenfields Colony Block C, Faridabad',
  'Greenfields, Faridabad',
  'HBH Colony, Faridabad',
  'Hanuman Nagar, Faridabad',
  'Harkesh Colony, Faridabad',
  'Harkesh Nagar, Faridabad',
  'Hirapur, Faridabad',
  'House no. 6433A , gali 25 ,, Faridabad',
  'Housing Board Colony, Faridabad',
  'Housing Board Duplex, Faridabad',
  'Huda Market, Faridabad',
  'IP Colony, Faridabad',
  'Indira Enclave, Faridabad',
  'Indira Gandhi Colony, Faridabad',
  'Indra Nagar, Faridabad',
  'Ismailpur, Faridabad',
  'J Block Sector 10 HBC, Faridabad',
  'Jawahar Colony, Faridabad',
  'Jeevan Nagar, Faridabad',
  'Kail Gaon, Faridabad',
  'Kapra Colony, Faridabad',
  'Karnera, Faridabad',
  'Krishna Colony, Faridabad',
  'Krishna Nagar, Faridabad',
  'Lakkarpur, Faridabad',
  'Mathura Road, Faridabad',
  'NIT 5, Faridabad',
  'NIT, Faridabad',
  'Nangla Enclave Part 1, Faridabad',
  'Nangla Enclave Part 2, Faridabad',
  'Nangla Gujran, Faridabad',
  'Nehar Par, Faridabad',
  'Nehru Ground, Faridabad',
  'New Baselwa Colony, Faridabad',
  'New Industrial Township 1, Faridabad',
  'New Industrial Township 2, Faridabad',
  'New Industrial Township 3, Faridabad',
  'Nikhil Vihar Colony, Faridabad',
  'Old, Faridabad',
  'Om Enclave part 2, Faridabad',
  'Om Enclave, Faridabad',
  'Palla Number 1, Faridabad',
  'Palla, Faridabad',
  'Pandit Place, Faridabad',
  'Pocket G Sector 10 Housing Board Colony, Faridabad',
  'Prem Nagar, Faridabad',
  'Punjabi Mohalla, Faridabad',
  'Rajeev Colony, Faridabad',
  'Rajendra Colony, Faridabad',
  'Roshan Nagar, Faridabad',
  'SGM Nagar, Faridabad',
  'Sainik Colony, Faridabad',
  'Sanjay Colony, Faridabad',
  'Sanjay Gandhi Memorial Nagar, Faridabad',
  'Saraswati Colony, Faridabad',
  'Sayad Wara, Faridabad',
  'Sector 10 HBC, Faridabad',
  'Sector 10 Housing Board Colony, Faridabad',
  'Sector 11, Faridabad',
  'Sector 11D faridabad, Faridabad',
  'Sector 14, Faridabad',
  'Sector 15, Faridabad',
  'Sector 15A, Faridabad',
  'Sector 16, Faridabad',
  'Sector 16A, Faridabad',
  'Sector 17, Faridabad',
  'Sector 18, Faridabad',
  'Sector 18A, Faridabad',
  'Sector 19, Faridabad',
  'Sector 2, Faridabad',
  'Sector 21, Faridabad',
  'Sector 21A, Faridabad',
  'Sector 21B, Faridabad',
  'Sector 21C, Faridabad',
  'Sector 21D, Faridabad',
  'Sector 22, Faridabad',
  'Sector 23, Faridabad',
  'Sector 23A, Faridabad',
  'Sector 28, Faridabad',
  'Sector 29, Faridabad',
  'Sector 3 Ballabhgarh, Faridabad',
  'Sector 3, Faridabad',
  'Sector 30, Faridabad',
  'Sector 31, Faridabad',
  'Sector 32, Faridabad',
  'Sector 35, Faridabad',
  'Sector 37, Faridabad',
  'Sector 39, Faridabad',
  'Sector 4, Faridabad',
  'Sector 42, Faridabad',
  'Sector 45, Faridabad',
  'Sector 46, Faridabad',
  'Sector 48, Faridabad',
  'Sector 49, Faridabad',
  'Sector 50, Faridabad',
  'Sector 52, Faridabad',
  'Sector 55, Faridabad',
  'Sector 57, Faridabad',
  'Sector 59, Faridabad',
  'Sector 62, Faridabad',
  'Sector 64, Faridabad',
  'Sector 65, Faridabad',
  'Sector 7, Faridabad',
  'Sector 70, Faridabad',
  'Sector 75, Faridabad',
  'Sector 76, Faridabad',
  'Sector 77, Faridabad',
  'Sector 78, Faridabad',
  'Sector 79, Faridabad',
  'Sector 7A, Faridabad',
  'Sector 7D, Faridabad',
  'Sector 8, Faridabad',
  'Sector 80, Faridabad',
  'Sector 81, Faridabad',
  'Sector 82, Faridabad',
  'Sector 84, Faridabad',
  'Sector 85, Faridabad',
  'Sector 86, Faridabad',
  'Sector 87, Faridabad',
  'Sector 88, Faridabad',
  'Sector 89, Faridabad',
  'Sector 9, Faridabad',
  'Sector 91, Faridabad',
  'Sector 98, Faridabad',
  'Shiv Durga Vihar, Faridabad',
  'Shyam Colony, Faridabad',
  'Sihi Village, Faridabad',
  'Sikri, Faridabad',
  'Sirohi, Faridabad',
  'Subhash Colony, Faridabad',
  'Surajkund, Faridabad',
  'Surdas Colony, Faridabad',
  'Surya Colony, Faridabad',
  'Surya Nagar Phase 1, Faridabad',
  'Surya Nagar Phase 2, Faridabad',
  'Surya Vihar Part 2, Faridabad',
  'Surya Vihar Part 3, Faridabad',
  'Surya Vihar, Faridabad',
  'Tigaon, Faridabad',
  'Tilpat, Faridabad',
  'Tirkha Colony, Faridabad',
  'Uncha Gaon, Faridabad',
  'Vinay Nagar, Faridabad',
  'Wazirpur, Faridabad',
  'Yadav Colony, Faridabad',
  'jhariamarket, Faridabad',
  'khatri wada, Faridabad',
  'parvatiya colony, Faridabad',
  'sector 56, Faridabad',
  'vijayapura, Faridabad'
];

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

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            House for Sale in{" "}
            <span className="text-[#F97316]">Faridabad</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Discover premium residential properties across prime sectors of Faridabad.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Locations
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 text-sm">

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

          <Link
            href="https://www.parcharmanch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-[#F97316] transition mt-3 md:mt-0"
          >
            Designed By Parchar Manch
          </Link>
        </div>

      </div>
    </footer>
  );
}