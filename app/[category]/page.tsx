import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {};

const PortfolioPage = (props: Props) => {
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
    <div className="w-full bg-[#161519] p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-2 lg:mt-16 md:mx-10 lg:mx-24">
        {portfolio.map((item, index) => (
          <Dialog>
            <DialogTrigger>
              <div
                className="relative w-full aspect-square hover:scale-110 transition-all duration-500 ease-in-out shadowImgParent"
                key={index}
              >
                <Image
                  src={item.src}
                  alt="Picture of the author"
                  fill
                  className="shadowImg"
                />
                <div className="shadowImg absolute bottom-0 left-0 w-full h-full bg-black "></div>
              </div>
            </DialogTrigger>
            <DialogContent className="w-full aspect-square">
              <Image
                fill
                src={item.src}
                alt="picture"
                className="aspect-contain"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
