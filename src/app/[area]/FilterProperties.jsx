"use client";

import { useEffect, useState, useMemo } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function FilterProperties({ area }) {

  const { data, properties, loading2, error2, setLocality } = useProperty();

  // ✅ SAFETY FIX (null crash prevent)
  const safeData = Array.isArray(data) ? data : [];
  const safeProperties = Array.isArray(properties) ? properties : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea, setLocality]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    return `${formattedNumber} ${unit}`;
  };

  /* ================= 150 CARD LOGIC ================= */

  const finalData = useMemo(() => {

    // Agar full domain data hi nahi hai
    if (safeProperties.length === 0) {
      return safeData;
    }

    // Filtered IDs
    const filteredIds = new Set(
      safeData.map((p) => p._id)
    );

    // Remaining domain properties
    const remaining = safeProperties.filter(
      (p) => !filteredIds.has(p._id)
    );

    const needed = 150 - safeData.length;

    return [
      ...safeData,
      ...remaining.slice(0, needed > 0 ? needed : 0)
    ].slice(0, 150);

  }, [safeData, safeProperties]);

  /* ================= LOADING ================= */
  if (loading2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-50">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-orange-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FF6500] border-r-orange-400 animate-spin"></div>
        </div>
        <p className="mt-6 text-sm font-medium text-gray-600 tracking-wide">
          Loading Premium Listings...
        </p>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-orange-50">
        <p className="text-red-500 text-lg">
          Something went wrong while loading properties.
        </p>
      </div>
    );
  }

  /* ================= EMPTY ================= */
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-50">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Shops Available in {formattedArea}
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#F5F7FA] px-4 py-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        {/* <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Premium House For Sale in{" "}
            <span className="text-[#FF6500]">{formattedArea}</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Residential properties in prime business locations.
          </p>
          <div className="w-20 h-1 bg-[#FF6500] mx-auto mt-6 rounded-full"></div>
        </div> */}

        {/* GRID */}
        <div className="grid grid-cols-1  gap-6">

          {finalData.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-orange-100
              shadow-sm hover:shadow-xl hover:-translate-y-1
              transition duration-300 overflow-hidden flex flex-col md:flex-row"
            >

              {/* IMAGE */}
              <div className="relative md:w-1/3 aspect-[4/3] md:aspect-auto">
                {property?.media?.url ? (
                  <Image
                    src={property.media.url}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-orange-50 w-full h-full flex items-center justify-center text-[#FF6500] text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6 flex-1 flex flex-col">

                <h2 className="text-base font-semibold text-gray-900 leading-snug">
                  {property.title}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  {property.locality}
                </p>

                {/* INFO BAR */}
                <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs flex items-center justify-between">

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">AREA</span>
                    <span className="font-semibold text-gray-900">
                      {formatArea(property.area, property.areaUnit)}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-orange-200"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">STATUS</span>
                    <span className="font-semibold text-green-600">
                      {property.status || "Available"}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-orange-200"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">TYPE</span>
                    <span className="font-semibold text-gray-900">
                      {property.propertyCategory}
                    </span>
                  </div>

                </div>

                <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {property.description ||
                    "Prime commercial shop ideal for business and long-term investment."}
                </p>

                <div className="flex-1" />

                {/* PRICE + LINK */}
                {/* PRICE + ACTIONS */}
                <div className="mt-5 flex justify-between items-center flex-wrap gap-3">

                  {/* PRICE */}
                  {property.price && property.price > 0 ? (
                    <p className="text-lg font-bold text-[#FF6500]">
                      ₹ {property.price.toLocaleString("en-IN")}
                    </p>
                  ) : (
                    <span className="text-sm font-semibold text-[#FF6500]">
                      Price on Request
                    </span>
                  )}

                  {/* RIGHT SIDE BUTTONS */}
                  <div className="flex items-center gap-4">

                    {/* ENQUIRE NOW */}
                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="bg-[#FF6500] text-white px-4 py-2 rounded-full text-sm
      hover:bg-[#e65a00] transition shadow-md cursor-pointer"
                    >
                      Contact Now
                    </button>

                    {/* VIEW DETAILS (UNCHANGED STYLE) */}
                    <Link
                      href={`/properties/${property.slug}`}
                      className="text-[#FF6500] text-sm font-medium hover:underline cursor-pointer"
                    >
                      View Details →
                    </Link>

                  </div>
                </div>

              </div>
            </div>
          ))}

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