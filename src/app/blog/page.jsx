import React from "react";
import BlogList from "./BlogList";

export const metadata = {
  title: "Real Estate Blog | House Buying Tips, Property News & Market Trends in Faridabad",

  description:
    "Read expert blogs on house buying tips in Faridabad, property market trends, home loan advice, best localities to invest, legal guide & expert real estate advice to help you make the smartest property decision.",

  keywords: [
   "real estate blog Faridabad", "house buying tips Faridabad", "property market trends Faridabad", "home loan advice Faridabad", "best localities for houses Faridabad", "real estate news Faridabad", "house investment Faridabad", "Faridabad housing guide", "house price trends Faridabad", "independent house buying checklist Faridabad"
  ],

  alternates: {
    canonical: "https://www.houseforsaleinfaridabad.com/blog",
  },
   robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-yellow-50 to-yellow-50">
      <BlogList />
    </div>
  );
};

export default page;