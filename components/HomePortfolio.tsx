import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const HomePortfolio = (props: Props) => {
  const portfolio = [
    {
      src: "/images/youtubetogg.webp",
      category: "Reklam Çalışmaları",
    },
    {
      src: "/images/youtubetogg.webp",
      category: "Reklam Çalışmaları",
    },
    {
      src: "/images/youtubetogg.webp",
      category: "Reklam Çalışmaları",
    },
    {
      src: "/images/youtubetogg.webp",
      category: "Reklam Çalışmaları",
    },
    {
      src: "/images/youtubetogg.webp",
      category: "Reklam Çalışmaları",
    },
    {
      src: "/images/youtubetogg.webp",
      category: "Reklam Çalışmaları",
    },
  ];
  return (
    <section className="bg-[#161519] w-full py-4 px-3 md:py-24 md:px-20 z-10 relative">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        {portfolio.map((item, index) => (
          <div
            className="relative w-full aspect-square hover:scale-110 transition-all duration-500 ease-in-out group shadowImgParent"
            key={index}
          >
            <Image
              src={item.src}
              alt="Picture of the author"
              fill
              className="shadowImg"
            />
            <div className="shadowImg absolute bottom-0 left-0 w-full h-full bg-black"></div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-6 lg:mt-16">
        <Link
          href={"/portfolio"}
          className="text-[#D4D4D5] md:text-3xl flex flex-col items-center"
        >
          view all
          <ChevronDown className="text-[#D4D4D5] md:w-9" />
        </Link>
      </div>
    </section>
  );
};

export default HomePortfolio;
