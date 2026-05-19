
import Image from "next/image";
import Hero from "@/components/Hero.jsx"
import Properties from "@/components/Proprtes";
import PremiumFaqSection from "@/components/PremiumFaqSection";
import HouseSaleContent from "@/components/HouseSaleContent";
export default function Home() {
  return (
    <>
     <Hero/>
     <Properties/>
     <HouseSaleContent/>
     <PremiumFaqSection/>
    </>
  );
}
