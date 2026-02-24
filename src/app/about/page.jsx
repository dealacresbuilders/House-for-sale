"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50 px-4 py-20">
      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About{" "}
            <span className="text-[#FF6500]">
              Shop For Sale in Faridabad
            </span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We help investors, business owners, and property buyers discover
            verified commercial shops in prime locations across Faridabad.
          </p>

          <div className="w-24 h-1 bg-[#FF6500] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* OUR MISSION */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is to simplify commercial property buying by providing
              accurate listings, transparent pricing, and verified investment
              opportunities.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We focus on high-growth sectors including Neharpar, Sector 9,
              Sector 21, and other emerging commercial hubs of Faridabad.
            </p>
          </div>

          {/* STATS CARD */}
          <div className="bg-orange-50 border border-orange-200 rounded-3xl p-12 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-[#FF6500]">500+</h3>
            <p className="text-gray-700 mt-2">
              Verified Commercial Listings
            </p>

            <h3 className="text-4xl font-bold text-[#FF6500] mt-10">
              1000+
            </h3>
            <p className="text-gray-700 mt-2">
              Happy Investors & Buyers
            </p>
          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-14">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Verified Listings
              </h3>
              <p className="text-gray-600 text-sm">
                Every property is checked for authenticity to ensure safe
                investment decisions.
              </p>
            </div>

            <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Prime Locations
              </h3>
              <p className="text-gray-600 text-sm">
                We focus only on high-demand commercial sectors with strong
                rental and resale potential.
              </p>
            </div>

            <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Transparent Process
              </h3>
              <p className="text-gray-600 text-sm">
                Clear pricing, no hidden charges, and full guidance from inquiry
                to final purchase.
              </p>
            </div>

          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center bg-[#FF6500] rounded-3xl p-14 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Invest in Faridabad?
          </h2>

          <p className="mb-8 text-orange-100">
            Explore premium commercial shops and secure your next investment today.
          </p>

          <Link
            href="/"
            className="bg-white text-[#FF6500] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Browse Properties
          </Link>
        </div>

      </div>
    </section>
  );
}