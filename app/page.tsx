import Image from "next/image";
import HomePortfolio from "@/components/HomePortfolio";
import Hero from "@/components/Hero";
import Bubbles from "@/components/Bubbles";

export default function Home() {
  return (
    <>
      {/* <Bubbles /> */}
      <Hero />
      <HomePortfolio />
    </>
  );
}
