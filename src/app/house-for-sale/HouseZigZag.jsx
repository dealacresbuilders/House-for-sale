"use client";

import Link from "next/link";

export default function HouseZigZag() {
  const sections = [
    {
      title: " Why Faridabad Real Estate Market Is Growing",
      content: (
        <>
          <p>Faridabad is becoming one of the most popular cities for home buyers. The demand for independent house in Faridabad and other property types is increasing every year.</p>
          <p className="mt-2">Reasons for growth:</p>
          <ul className="list-disc pl-5">
            <li>Close to Delhi and Gurgaon</li>
            <li>Better road and metro connectivity</li>
            <li>Affordable housing compared to nearby cities</li>
            <li>Growing job opportunities</li>
            <li>New infrastructure projects</li>
          </ul>
          <p className="mt-2">People who cannot afford Delhi or Gurgaon are now choosing Faridabad. This is why residential property in Faridabad is in high demand.</p>
        </>
      ),
    },

    {
      title: " Comparison: Plot vs Flat vs House",
      content: (
        <>
          <p>When searching for a House for sale in Faridabad, buyers often compare different options.</p>

          <p className="mt-2"><strong>Plot</strong><br/>You build your own home<br/>Full control on design<br/>Takes time and effort</p>

          <p className="mt-2"><strong>Flat</strong><br/>Ready to move<br/>Easy maintenance<br/>Limited space and privacy</p>

          <p className="mt-2"><strong>Independent House</strong><br/>More space and privacy<br/>Freedom to modify<br/>Better long-term value</p>

          <p className="mt-2">If you want comfort and freedom, an independent house in Faridabad is often the best choice.</p>
        </>
      ),
    },

    {
      title: "Types of Houses Available",
      content: (
        <>
          <p>There are many types of houses available in Faridabad. You can choose based on your budget and needs.</p>

          <p className="mt-2">Common Types:</p>
          <ul className="list-disc pl-5">
            <li>Independent houses</li>
            <li>Builder floors</li>
            <li>Duplex homes</li>
            <li>Villas</li>
            <li>Affordable houses</li>
          </ul>

          <p className="mt-2">Key Features:</p>
          <ul className="list-disc pl-5">
            <li>Different sizes and layouts</li>
            <li>Options for all budgets</li>
            <li>Ready-to-move and under-construction</li>
          </ul>

          <p className="mt-2">Many buyers prefer ready to move house in Faridabad because they can shift immediately.</p>
        </>
      ),
    },

    {
      title: "Best Locations in Faridabad",
      isLocation: true,
      content: (
        <>
          <p>Faridabad has many good areas for buying a house.</p>

          <p className="mt-2">Top Locations:</p>
          <ul className="list-disc pl-5">
            <li>Sector 15, 16, 21 (well-developed)</li>
            <li>Greater Faridabad (new growth area)</li>
            <li>Ballabgarh (affordable options)</li>
            <li>Sector 75–89 (modern housing)</li>
          </ul>

          <p className="mt-2">Why These Locations:</p>
          <ul className="list-disc pl-5">
            <li>Good connectivity</li>
            <li>Schools and hospitals nearby</li>
            <li>Growing infrastructure</li>
          </ul>

          <p className="mt-2">If you are searching for property in Faridabad, these areas are worth exploring.</p>
        </>
      ),
    },

    {
      title: "Price Trends in Faridabad",
      content: (
        <>
          <p>Property prices in Faridabad are rising slowly but steadily.</p>

          <p className="mt-2">Price Insights:</p>
          <ul className="list-disc pl-5">
            <li>Affordable compared to Delhi</li>
            <li>Higher demand in developed sectors</li>
            <li>Growth in new sectors</li>
          </ul>

          <p className="mt-2">Example:</p>
          <ul className="list-disc pl-5">
            <li>Budget homes available in outskirts</li>
            <li>Premium homes in central sectors</li>
          </ul>

          <p className="mt-2">People looking for affordable house in Faridabad still have many options.</p>
        </>
      ),
    },

    {
      title: " How the Platform Helps Users",
      content: (
        <>
          <p>Our platform makes buying a House for sale in Faridabad simple and clear.</p>

          <p className="mt-2">Key Benefits:</p>
          <ul className="list-disc pl-5">
            <li>Easy property search</li>
            <li>Verified listings only</li>
            <li>Direct communication with sellers</li>
            <li>No hidden charges</li>
          </ul>

          <p className="mt-2">You can:</p>
          <ul className="list-disc pl-5">
            <li>Compare multiple options</li>
            <li>Check details clearly</li>
            <li>Contact owners instantly</li>
          </ul>

          <p className="mt-2">Everything is designed to save your time and money.</p>
        </>
      ),
    },

    {
      title: "Importance of Verified Listings",
      content: (
        <>
          <p>One of the biggest problems in property buying is fake listings.</p>

          <p className="mt-2">Benefits:</p>
          <ul className="list-disc pl-5">
            <li>Real property details</li>
            <li>Correct pricing</li>
            <li>No fraud risk</li>
            <li>Peace of mind</li>
          </ul>

          <p className="mt-2">When searching for a home in Faridabad, always choose platforms with trusted listings.</p>
        </>
      ),
    },

    {
      title: " Direct Buyer-Seller Interaction",
      content: (
        <>
          <p>Many platforms depend on agents. But our platform removes the middleman.</p>

          <p className="mt-2">Advantages:</p>
          <ul className="list-disc pl-5">
            <li>No extra commission</li>
            <li>Clear communication</li>
            <li>Faster decision making</li>
            <li>Better negotiation</li>
          </ul>

          <p className="mt-2">When you search for a House for sale in Faridabad, you can directly talk to the owner. This makes the process honest and simple.</p>
        </>
      ),
    },
    {
      title: " Free Listing + Deal Acres Partnership",
      content: (
        <>
          <p>We offer free property listing for all users.</p>

          <p className="mt-2">This means:</p>
          <ul className="list-disc pl-5">
            <li>Sellers can list properties without paying</li>
            <li>Buyers get more options</li>
            <li>Market becomes more transparent</li>
          </ul>

          <p className="mt-2">
            We also have a corporate tie-up with Deal Acres. This helps us maintain quality listings and better reach.
          </p>

          <p className="mt-2">
            So when you search for a House for sale in Faridabad, you get trusted and wide options.
          </p>
        </>
      ),
    },

    {
      title: "Step-by-Step Buying Process",
      content: (
        <>
          <p>Step 1:</p>
          <p>Search for properties</p>
          <p>Use filters to find the best house</p>

          <p className="mt-2">Step 2:</p>
          <p>Shortlist options</p>
          <p>Compare features and prices</p>

          <p className="mt-2">Step 3:</p>
          <p>Contact seller</p>
          <p>Talk directly without agents</p>

          <p className="mt-2">Step 4:</p>
          <p>Visit property</p>
          <p>Check condition and location</p>

          <p className="mt-2">Step 5:</p>
          <p>Verify documents</p>
          <p>Ensure legal safety</p>

          <p className="mt-2">Step 6:</p>
          <p>Finalize deal</p>
          <p>Complete payment and agreement</p>
        </>
      ),
    },

    {
      title: "Legal Checks Before Buying",
      content: (
        <>
          <p>Buying a house requires proper legal checks.</p>

          <p className="mt-2">Important Checks:</p>
          <ul className="list-disc pl-5">
            <li>Ownership verification</li>
            <li>Property title</li>
            <li>Approvals from authorities</li>
            <li>No pending dues</li>
          </ul>

          <p className="mt-2">
            Always check these before buying a House for sale in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: "Documents Required",
      content: (
        <>
          <p>You need these documents:</p>

          <ul className="list-disc pl-5 mt-2">
            <li>ID proof</li>
            <li>Address proof</li>
            <li>Sale agreement</li>
            <li>Property papers</li>
            <li>Bank loan documents (if any)</li>
          </ul>

          <p className="mt-2">
            These documents are important when buying residential property in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: "Problems Buyers Face + Solutions",
      content: (
        <>
          <p>Common Problems:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Fake listings</li>
            <li>High broker charges</li>
            <li>Lack of information</li>
            <li>Limited options</li>
          </ul>

          <p className="mt-3">Solutions by Platform:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Verified listings</li>
            <li>No middleman</li>
            <li>All properties in one place</li>
            <li>Clear property details</li>
          </ul>

          <p className="mt-2">
            This makes buying a House for sale in Faridabad easy and safe.
          </p>
        </>
      ),
    },

    {
      title: "Mistakes to Avoid",
      content: (
        <>
          <p>Avoid these mistakes:</p>

          <ul className="list-disc pl-5 mt-2">
            <li>Not checking documents</li>
            <li>Trusting unknown agents</li>
            <li>Ignoring location</li>
            <li>Not comparing prices</li>
          </ul>

          <p className="mt-2">
            Always research properly before buying real estate in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: "Future Growth and Investment",
      content: (
        <>
          <p>Faridabad has strong future potential.</p>

          <p className="mt-2">Growth Factors:</p>
          <ul className="list-disc pl-5">
            <li>Metro expansion</li>
            <li>New highways</li>
            <li>Industrial growth</li>
            <li>Increasing demand</li>
          </ul>

          <p className="mt-2">
            Investing in a House for sale in Faridabad today can give good returns in future.
          </p>
        </>
      ),
    },

    {
      title: "Who Should Use This Platform",
      content: (
        <>
          <p>This platform is useful for:</p>

          <ul className="list-disc pl-5 mt-2">
            <li>First-time buyers</li>
            <li>Investors</li>
            <li>Families</li>
            <li>Sellers</li>
          </ul>

          <p className="mt-2">
            Anyone looking for buy house in Faridabad can use this platform easily.
          </p>
        </>
      ),
    },

    {
      title: "Benefits for Sellers",
      content: (
        <>
          <p>Sellers also get many benefits.</p>

          <p className="mt-2">Key Advantages:</p>
          <ul className="list-disc pl-5">
            <li>Free property listing</li>
            <li>Direct buyer connection</li>
            <li>No commission</li>
            <li>More visibility</li>
          </ul>

          <p className="mt-2">
            With our Deal Acres partnership, sellers get better reach and serious buyers.
          </p>
        </>
      ),
    },

    {
      title: " Conclusion: Complete Property Solution",
      content: (
        <>
          <p>Finding a House for sale in Faridabad does not have to be difficult.</p>

          <p className="mt-2">With the right platform, you get:</p>
          <ul className="list-disc pl-5">
            <li>Trusted listings</li>
            <li>Direct seller interaction</li>
            <li>No middleman</li>
            <li>All properties in one place</li>
            <li>Free listing benefits</li>
          </ul>

          <p className="mt-2">
            This makes the entire process simple, transparent, and stress-free.
          </p>
        </>
      ),
    },
  ];

 

  return (
    <section className="w-full bg-[#F5F7FA] py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto relative">

        {/* center line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-orange-200 hidden md:block"></div>

        <div className="space-y-12">

          {sections.map((item, i) => (
            <div
              key={i}
              className={`md:w-1/2 ${
                i % 2 === 0 ? "md:ml-auto md:pl-10" : "md:pr-10"
              }`}
            >
              <div className={`rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:-translate-y-2
                ${item.isLocation 
                  ? "bg-gradient-to-br from-orange-500 to-orange-400 text-white" 
                  : "bg-white border border-orange-100 text-gray-800"}
              `}>

                <h2 className={`text-lg md:text-xl font-bold mb-3 
                  ${item.isLocation ? "text-white" : "text-orange-600"}
                `}>
                  {item.title}
                </h2>

                <div className="space-y-1">
                  {item.content}
                </div>

                {/* LOCATION BUTTON */}
                {item.isLocation && (
                  <Link href="/#locations">
                    <button className="mt-5 bg-white text-orange-600 px-5 py-2 rounded-lg font-semibold hover:shadow-lg transition cursor-pointer">
                      Explore More Location →
                    </button>
                  </Link>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}