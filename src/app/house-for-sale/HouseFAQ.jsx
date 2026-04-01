"use client";

import { useState } from "react";

export default function HouseFAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "1. How can I find a house for sale in Faridabad easily?",
      a: "You can use a trusted property platform where all listings are available in one place. This helps you compare options quickly. Verified listings ensure safety. You can also directly contact sellers without agents. This saves time and money.",
    },
    {
      q: "2. Is Faridabad a good place to buy property?",
      a: "Yes, Faridabad is growing fast. It has good connectivity and affordable prices. Many people are buying homes here. It is a good option for both living and investment.",
    },
    {
      q: "3. What types of houses are available in Faridabad?",
      a: "You can find independent houses, builder floors, villas, and duplex homes. Options are available for all budgets. Many people prefer ready to move house in Faridabad for quick shifting.",
    },
    {
      q: "4. What is the average price of a house in Faridabad?",
      a: "Prices depend on location and size. Some areas offer affordable house in Faridabad, while others have premium options. It is always better to compare multiple listings.",
    },
    {
      q: "5. Why should I avoid property agents?",
      a: "Agents may charge high commissions. Sometimes they do not show all options. Direct buyer-seller interaction gives better transparency and saves money.",
    },
    {
      q: "6. What documents are needed to buy a house?",
      a: "You need ID proof, address proof, property papers, and agreement documents. Always verify ownership before buying any property in Faridabad.",
    },
    {
      q: "7. Is it safe to buy property online?",
      a: "Yes, if you use a platform with verified listings. Trusted platforms ensure real property details and reduce fraud risk.",
    },
    {
      q: "8. Can I find affordable houses in Faridabad?",
      a: "Yes, many areas offer budget-friendly homes. You can search using filters to find affordable house in Faridabad easily.",
    },
    {
      q: "9. How does free property listing help sellers?",
      a: "Free property listing allows sellers to list without paying fees. This attracts more sellers, giving buyers more options. It also increases transparency in the market.",
    },
    {
      q: "10. Why is direct buyer-seller interaction important?",
      a: "It removes the middleman. Buyers can talk directly to sellers. This builds trust, reduces cost, and speeds up the process of buying a house for sale in Faridabad.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F7FA] py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold text-orange-600 mb-10 ">
          FAQs
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border rounded-xl overflow-hidden transition duration-300
              ${open === i ? "border-orange-400 shadow-lg" : "border-orange-100 hover:shadow-md"}`}
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.q}
                </span>

                <span className={`text-xl font-bold transition 
                  ${open === i ? "text-orange-600 rotate-180" : "text-orange-400"}`}
                >
                  ⌄
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-[300px] py-4 border-t border-orange-100" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.a}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}