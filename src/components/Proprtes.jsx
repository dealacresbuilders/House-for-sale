"use client";

import { useState,useEffect, useRef } from "react";

import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";
import { useSearchParams } from "next/navigation";

export default function Properties() {
  const {
  properties,
  loading,
  error,
  
} = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const propertySectionRef = useRef(null);

  const itemsPerPage = 150;


// useEffect(() => {
//   setCurrentPage(1);

//   if (bhk) {
//     console.log("BHK Triggered:", bhk);  // 👈 ye add karo
//     fetchPropertiesByType(bhk);
//   } else {
//     refetch();
//   }
// }, [bhk]);
  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-50">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-orange-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-400 animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading Premium Listings...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          No houses Available in Faridabad
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  /* ================= PAGINATION LOGIC ================= */
  const totalItems = properties.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);

  return (
    <section
      ref={propertySectionRef}
      className="bg-[#F5F7FA] px-4 py-16"
    >
     {/* PAGE HEADING */}
<div className="max-w-7xl mx-auto mb-12">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
    Premium Residential House For Sale Properties in Faridabad
  </h1>

  <p className="mt-4 text-gray-500 max-w-2xl">
    Explore high-potential houses and Residential spaces available for sale
    and investment across prime locations in Faridabad.
  </p>

  <div className="w-20 h-1 bg-[#FF6500] mt-6 rounded-full"></div>

  {/* ✅ BHK FILTER BUTTONS */}
  <div className="mt-8">
    <BHKFilterButtons />
  </div>
</div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">
          {currentProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden md:h-[250px]"
            >
             <div className="flex flex-col md:flex-row h-full ">

                <div className="relative md:w-[45%] h-[250px]">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-52 md:h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#FF6500] text-white text-xs px-4 py-1 rounded-full shadow font-medium">
                    {property.propertyType}
                  </span>
                </div>

                <div className="p-6 flex flex-col w-full min-w-0">
  
  <h2 className="text-lg font-bold text-gray-900 overflow-hidden md:whitespace-nowrap md:text-ellipsis">
    {property.title}
  </h2>

                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z"
                      />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>

                    {property.locality}
                  </p>


                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 text-sm">

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Area:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatArea(property.area, property.areaUnit)}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Type:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Status:
                      </span>
                      <span className="font-semibold text-orange-600">
                        {property.status || "Ready to Move"}
                      </span>
                    </div>
                  </div>

                  {/* <p className="text-sm text-gray-500 mt-4 line-clamp-2 leading-relaxed">
                    {property.description2 ||
                      "High-value commercial asset offering strong rental potential and long-term growth."}
                  </p> */}

                  <div className="flex-1" />

                  <div className="flex flex-col md:flex-row justify-between  mt-5 gap-4">

                    <p className="text-2xl font-bold text-[#FF6500]">
                      ₹ {property.price?.toLocaleString("en-IN")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">

  <button
    onClick={() => {
      setSelectedProperty(property.title);
      setOpen(true);
    }}
    className="bg-[#FF6500] text-white px-4 sm:px-6 py-2 rounded-full 
    hover:bg-[#e65a00] transition w-full md:w-auto 
    text-center font-medium shadow-sm hover:shadow-md text-sm"
  >
    Contact Now
  </button>

  <Link
    href={`/properties/${property.slug}`}
    className="border border-[#FF6500] text-[#FF6500] 
    px-4 sm:px-6 py-2 rounded-full hover:bg-orange-50 
    transition w-full md:w-auto text-center font-medium text-sm"
  >
    View Details
  </Link>

</div>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* PAGINATION */}
          <div className="mt-16">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={(page) => {
                setCurrentPage(page);

                const yOffset = -90;
                const y =
                  propertySectionRef.current.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}