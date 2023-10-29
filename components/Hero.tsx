import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full py-6 lg:py-[300px] lg:px-28 px-2 flex">
      <div className="z-50 relative lg:ml-32">
        <h1 className="text-[#161519] lg:text-7xl font-semibold text-xl">
          ÖmerFarukErdoğan
        </h1>
        <h2 className="text-[#161519] lg:text-3xl font-normal -my-1 lg:my-2">
          graphic & photography
        </h2>
        <p className="text-[#161519] lg:text-6xl font-thin text-xl">
          this is my world
        </p>
      </div>
      <div className="hidden md:block absolute bg-[#F7F7F7] w-full lg:w-[1600px] aspect-square rounded-full  top-0 right-0 translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="hidden md:block absolute bg-[#FDFDFD] w-1/2 lg:w-[1300px] aspect-square rounded-full  top-0 right-0 translate-x-1/3 -translate-y-1/3"></div>
      <div className="hidden md:block relative w-full">
        <Image
          src={"/images/ofepc.png"}
          fill
          alt="ömer faruk erdoğan"
          className="z-50 object-contain absolute scale-[300%] md:scale-[550%] ml-8 mt-10 md:mt-20"
        />
      </div>
    </div>
  );
};

export default Hero;
