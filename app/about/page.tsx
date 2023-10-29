import AboutSkills from "@/components/AboutSkills";
import Image from "next/image";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="flex flex-col h-full relative">
      <div className="flex flex:col flex-1 md:pl-36 md:py-36 p-10 overflow-x-hidden ">
        <div className="md:w-1/2 w-full">
          <h1 className="text-[#161519] text-3xl md:text-6xl font-semibold mb-4 md:mb-10">
            ÖmerFarukErdoğan
          </h1>
          <p className="text-[#161519] mb-4 leading-relaxed text-sm md:text-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Vestibulum luctus ex ac ipsum auctor
            convallis.
          </p>
          <p className="text-[#161519] leading-relaxed text-sm md:text-normal">
            Morbi sodales congue odio sed rhoncus. Proin odio quam, suscipit nec
            commodo vestibulum, malesuada a erat. Mauris dignissim mattis
            iaculis. Vestibulum vestibulum tincidunt lectus at Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra
          </p>
        </div>
      </div>
      <AboutSkills />
    </div>
  );
};

export default AboutPage;
