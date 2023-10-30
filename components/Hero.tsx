import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full py-6 lg:py-[300px] lg:px-28 px-2 flex overflow-x-hidden">
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
      <Image
        src={"/images/ofepc.png"}
        width={1000}
        height={1000}
        alt="ömer faruk erdoğan"
        className="z-50 object-contain absolute top-0 right-0 2xl:block hidden"
      />
      <Image
        src={"/images/ofepc.png"}
        width={150}
        height={150}
        alt="ömer faruk erdoğan"
        className="z-50 object-contain absolute top-16 right-0 sm:hidden"
      />
    </div>
  );
};

export default Hero;
