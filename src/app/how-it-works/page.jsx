import HouseFAQ from "./HouseFAQ";
import HouseHero from "./HouseHero";
import HouseZigZag from "./HouseZigZag";

// ✅ SEO METADATA
export const metadata = {
  title: "How It Works | Easy Steps to Buy a House in Faridabad",

  description:
    "Buying a house in Faridabad is now hassle-free. Search verified property listings, schedule a free site visit & own your dream home in Faridabad in just a few simple steps. Zero brokerage. No hidden charges.",

  keywords: [
    "how to buy house in Faridabad", "house buying process Faridabad", "property buying steps Faridabad", "house booking Faridabad", "home buying guide Faridabad", "purchase independent house Faridabad", "no brokerage house Faridabad", "verified houses Faridabad", "property registration Faridabad", "easy home loan Faridabad"
  ],

  alternates: {
    canonical: "https://www.houseforsaleinfaridabad.com/house-for-sale",
  },
};

export default function Page() {
  return (
    <>
      <HouseHero />
      <HouseZigZag />
      <HouseFAQ />
    </>
  );
}