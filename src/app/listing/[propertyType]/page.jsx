import PropertyTypePage from "./ListingPage";

export async function generateMetadata({ params }) {
  const { propertyType } = await params;

  const formattedType = propertyType
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${formattedType} Houses for Sale in Faridabad`,

    description: `Explore ${formattedType} houses for sale in Faridabad. Find independent houses, villas, and residential homes with modern amenities in prime locations of Faridabad.`,

    keywords: [
      `${formattedType} houses for sale in Faridabad`,
      `buy ${formattedType} house Faridabad`,
      `${formattedType} villa for sale Faridabad`,
      `${formattedType} independent house Faridabad`,
      `property for sale Faridabad`,
      `Faridabad residential homes`,
    ],

    alternates: {
      canonical: `https://www.houseforsaleinfaridabad.com/listing/${propertyType}`,
    },
  };
}

export default function Page(props) {
  return <PropertyTypePage {...props} />;
}