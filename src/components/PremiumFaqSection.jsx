"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of houses are available for sale in Faridabad?",
    answer:
      "You can find independent houses, builder floors, 2 BHK and 3 BHK homes, duplex houses, villas, and affordable budget homes across 70+ localities in Faridabad including Sainik Colony, Neharpar, Ballabhgarh, Sector 15, 16, 21, and more.",
  },
  {
    question: "What is the price range of a house for sale in Faridabad?",
    answer:
      "House prices in Faridabad range from approximately ₹20 lakhs for budget homes in developing areas to ₹2 crore+ for premium independent houses and villas in established sectors. Prices vary by location, size, and property type.",
  },
  {
    question: "Is there zero brokerage on houses listed on this platform?",
    answer:
      "Yes. Our platform offers direct buyer-seller connections with zero brokerage. You interact directly with property owners, saving you significant commission costs typically charged by agents.",
  },
  {
    question: "Which are the best areas to buy a house in Faridabad?",
    answer:
      "Top residential areas in Faridabad include Sainik Colony, NIT Faridabad, Neharpar (Sectors 75–89), Ballabhgarh, Sector 15, 16, 21, Ashoka Enclave, BPTP, Model Town, and Aravali Vihar — each offering unique advantages in connectivity, infrastructure, and affordability.",
  },
  {
    question: "How do I book a free site visit for a house in Faridabad?",
    answer:
      "Simply fill in the enquiry form on our website or contact us directly. Our team will arrange a free site visit at your convenience, where you can inspect the property, meet the seller, and evaluate the location.",
  },
  {
    question: "Can I get a home loan to buy a house in Faridabad?",
    answer:
      "Yes. Most banks and HFCs offer home loans for residential properties in Faridabad. Our team can guide you on loan eligibility, documentation, and connecting with trusted financial partners to make your purchase smooth and affordable.",
  },
  {
    question: "Are all house listings on this platform legally verified?",
    answer:
      "Yes. Every house listed on our platform undergoes verification for property title, ownership documents, legal approvals, and encumbrance status — ensuring you invest with complete peace of mind.",
  },
];

export default function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="w-full py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className=" mb-14">
            {/* <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-[#EA580C] text-sm font-semibold tracking-wide">
              FAQ'S
            </span> */}

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-5 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl  mt-5 leading-6">
              Everything you need to know before buying a house in Faridabad.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#EA580C] shadow-2xl shadow-orange-100"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-6 px-8 py-7 text-left bg-white"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-8">
                      {faq.question}
                    </h3>

                    <div
                      className={`min-w-[48px] h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#EA580C] text-white rotate-180"
                          : "bg-orange-100 text-[#EA580C]"
                      }`}
                    >
                      <ChevronDown size={22} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8">
                        <div className="h-px bg-orange-100 mb-6"></div>

                        <p className="text-gray-600 text-base md:text-lg leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}