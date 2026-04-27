"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50 px-4 py-20">
      <div className="max-w-6xl mx-auto">

        {/* ================= SECTION 1 : PAGE HEADING ================= */}
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            About{" "}
            <span className="text-[#FF6500]">
              House for Sale in Faridabad
            </span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Connecting serious homebuyers with verified house listings — and 
            helping sellers reach the right buyers, faster.
          </p>

          <div className="w-24 h-1 bg-[#FF6500] mx-auto mt-8 rounded-full"></div>
        </div>


        {/* ================= SECTION 2 : OUR MISSION ================= */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              We built this platform for one simple reason — finding a house 
              for sale in Faridabad should not be complicated. Whether you are 
              a buyer searching for your first home, an investor looking for 
              the right property, or a seller wanting to list without the hassle — 
              this is the platform built for all of you.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              We actively list houses for sale across NIT Faridabad, Neharpar, 
              Sector 15, 16, 21, Ballabhgarh, and dozens of other key localities — 
              giving buyers real choices and giving sellers the visibility they 
              deserve to close deals faster.
            </p>
          </div>

          {/* ================= SECTION 3 : STATS CARD ================= */}
          <div className="bg-orange-50 border border-orange-200 rounded-3xl p-12 text-center shadow-sm">

            <h3 className="text-4xl font-bold text-[#FF6500]">
              1200+
            </h3>
            <p className="text-gray-700 mt-2 text-lg">
              Houses Listed for Sale
            </p>

            <h3 className="text-4xl font-bold text-[#FF6500] mt-10">
              900+
            </h3>
            <p className="text-gray-700 mt-2 text-lg">
              Successful Buyer-Seller Connections
            </p>

            <h3 className="text-4xl font-bold text-[#FF6500] mt-10">
              70+
            </h3>
            <p className="text-gray-700 mt-2 text-lg">
              Localities Covered Across Faridabad
            </p>

          </div>

        </div>


        {/* ================= SECTION 4 : WHY CHOOSE US ================= */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-14">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                Genuine Listings Only
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every house listed on our platform is verified for authenticity — 
                buyers get real options and sellers get serious enquiries, nothing less.
              </p>
            </div>

            <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                Sell Faster, Reach Further
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sellers can post their property in minutes and instantly reach 
                thousands of active buyers searching for houses across Faridabad 
                right now.
              </p>
            </div>

            <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                Covers All of Faridabad
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From premium sectors to emerging residential areas — our listings 
                span every major locality in Faridabad so no buyer ever runs out of options.
              </p>
            </div>

          </div>
        </div>


        {/* ================= SECTION 5 : CTA ================= */}
        <div className="text-center bg-[#FF6500] rounded-3xl p-14 text-white shadow-lg">

          <h2 className="text-3xl font-bold mb-6">
            Looking to Buy or Sell a House in Faridabad?
          </h2>

          <p className="mb-10 text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Browse verified house listings across Faridabad or post your property 
            today and connect with thousands of genuine buyers actively searching right now.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="bg-white text-[#FF6500] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Browse Listings
            </Link>

            <Link
              href="/post-property"
              className="bg-orange-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-700 transition"
            >
              Post Your Property
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}