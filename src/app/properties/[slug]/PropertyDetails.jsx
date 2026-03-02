"use client";

import ContactPopup from "@/components/ContactPopup";
import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";

export default function PropertyDetails({ propertyy }) {
  const [open, setOpen] = useState(false);
  const { properties: allProperties } = useProperty();

  const formatArea = (area, unit) => {
    if (!area) return "—";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  const relatedProperties =
    allProperties?.length > 0
      ? allProperties
          .filter(
            (p) =>
              p._id !== propertyy._id &&
              p.city?.toLowerCase() === propertyy.city?.toLowerCase()
          )
          .slice(0, 30)
      : [];

  return (
    <div className="bg-[#F9FAFB] text-gray-900 px-4 sm:px-6 py-14">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-14 items-start">

          {/* IMAGE */}
          <div className="relative w-full h-[340px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            {propertyy?.media?.url ? (
              <Image
                src={propertyy.media.url}
                alt={propertyy?.title}
                fill
                priority
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
                No Image Available
              </div>
            )}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between h-full">

            <div>
              <h1 className="text-3xl font-semibold leading-tight text-gray-900">
                {propertyy?.title}
              </h1>

              <p className="text-gray-500 mt-2">
                {propertyy?.locality}
              </p>

              <p className="mt-6 text-3xl font-bold text-[#F97316]">
                {propertyy?.price === 0
                  ? "Price on Request"
                  : `₹ ${propertyy?.price?.toLocaleString("en-IN")}`}
              </p>

              {/* META GRID */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 text-sm border-t border-gray-200 pt-6">
                <Meta label="Category" value={propertyy?.propertyCategory} />
                <Meta label="Property Type" value={propertyy?.propertyType} />
                <Meta label="Listing Type" value={propertyy?.listingType} />
                <Meta label="City" value={propertyy?.city} />
                <Meta label="State" value={propertyy?.state} />
                <Meta label="Area" value={formatArea(propertyy?.area, propertyy?.areaUnit)} />

                {propertyy?.bedrooms > 0 && (
                  <Meta label="Bedrooms" value={propertyy?.bedrooms} />
                )}

                {propertyy?.bathrooms > 0 && (
                  <Meta label="Bathrooms" value={propertyy?.bathrooms} />
                )}
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setOpen(true)}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-full text-sm font-medium shadow-md transition"
              >
                Contact For Buy
              </button>
            </div>

          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <section className="mt-20 border-t border-gray-200 pt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            Property Description
          </h2>

          <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed max-w-4xl">
            {propertyy?.description?.length > 0 ? (
              propertyy.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))
            ) : (
              <p>No additional description available.</p>
            )}
          </div>
        </section>

        {/* ================= RELATED PROPERTIES ================= */}
        {relatedProperties.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-semibold text-gray-900 mb-10">
              Related Properties
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          </section>
        )}

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={propertyy?.title}
      />
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-gray-400 text-xs uppercase tracking-wider">
        {label}
      </div>
      <div className="mt-1 font-medium text-gray-900">
        {value || "—"}
      </div>
    </div>
  );
}