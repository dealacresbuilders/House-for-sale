"use client";
import Breadcrumb from "@/components/Breadcrumb";


export default function HouseHero() {
  return (
    <section className="w-full bg-[#F5F7FA] py-6 px-6 md:px-16">
    <div className="mb-6 flex justify-start">
   <Breadcrumb />
  </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE BIG CONTENT */}
        <div className="md:col-span-2 space-y-6">

          <div className="bg-white border border-orange-100 rounded-3xl p-8 shadow-sm">

            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
               Introduction: Finding the Right House Can Be Confusing
            </h1>

            <p className="text-gray-700 mb-4">
              Buying a house is a big dream for many people. But when you start searching for a House for sale in Faridabad, things can feel confusing. There are too many options, different prices, and sometimes unclear information. Many buyers also worry about fake listings or hidden charges.
            </p>

            <p className="text-gray-700 mb-4">
              Another big problem is trust. Many people depend on agents, but they are not always transparent. Sometimes they charge extra fees or do not show all available properties.
            </p>

            <p className="text-orange-600 font-semibold mb-4">
              This is where a better solution is needed.
            </p>

            <div className="bg-[#FDF3E7] border border-orange-200 rounded-xl p-5">
              <p className="font-semibold text-gray-800 mb-2">
                A platform where:
              </p>

              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>You can find all properties in one place</li>
                <li>Listings are real and verified</li>
                <li>You can talk directly to the seller</li>
                <li>No middleman is involved</li>
              </ul>
            </div>

            <p className="text-gray-700 mt-4">
              This makes the buying process simple, safe, and stress-free.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE PANEL (STICKY STYLE LOOK) */}
        <div className="space-y-6">

          <div className="bg-gradient-to-b from-orange-500 to-orange-400 text-white rounded-3xl p-6 shadow-md">

            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              What Our Website Does
            </h2>

            <p className="mb-4">
              Our platform is designed to make property buying easy. If you are searching for a House for sale in Faridabad, you can explore everything in one place without confusion.
            </p>

            <p className="font-semibold mb-2">
              Here’s what the platform offers:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-white/90">
              <li>All properties listed in one place</li>
              <li>Real and trusted listings</li>
              <li>Direct contact with sellers</li>
              <li>No broker or middleman</li>
              <li>Easy search filters</li>
              <li>Simple user experience</li>
            </ul>

            <p className="mt-4 text-white/90">
              You don’t have to visit multiple websites or depend on agents. Everything is available in one simple platform.
            </p>

          </div>

          {/* CTA CARD */}
          <div className="bg-white border border-orange-100 rounded-2xl p-5 text-center shadow-sm">

            <p className="text-gray-700 mb-4 font-medium">
              Find your dream house faster and safer
            </p>

            <button className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:shadow-md transition">
              Explore Houses →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}