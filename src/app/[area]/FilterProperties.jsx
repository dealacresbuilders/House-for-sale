"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useProperty } from "@/contextapi/propertycontext";
import ContactPopup from "@/components/ContactPopup";

export default function FilterProperties({ area }) {
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const { data, loading2, error2, setLocality } = useProperty();

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

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
    <section className="bg-[#F5F7FA] px-4 py-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Premium Shops in{" "}
            <span className="text-[#FF6500]">{formattedArea}</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Verified commercial properties in prime business locations.
          </p>
          <div className="w-20 h-1 bg-[#FF6500] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {data.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-orange-100
              shadow-sm hover:shadow-xl hover:-translate-y-1
              transition duration-300 overflow-hidden flex flex-col md:flex-row"
            >

              {/* IMAGE */}
              <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto">
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
                      {property.type || "Commercial"}
                    </span>
                  </div>

                </div>

                <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {property.description ||
                    "Prime commercial shop ideal for business and long-term investment."}
                </p>

                <div className="flex-1" />

                {/* PRICE + LINK */}
                <div className="mt-5 flex justify-between items-center">

                  {property.price && property.price > 0 ? (
                    <p className="text-lg font-bold text-[#FF6500]">
                      ₹ {property.price.toLocaleString("en-IN")}
                    </p>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="bg-[#FF6500] text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#e65a00] transition"
                    >
                      Price on Call
                    </button>
                  )}

                  <Link
                    href={`/properties/${property.slug}`}
                    className="text-[#FF6500] text-sm font-medium hover:underline"
                  >
                    View Details →
                  </Link>

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