import AboutSkills from "@/components/AboutSkills";
import Image from "next/image";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="flex flex-col h-full relative overflow-x-hidden">
      <div className="flex flex:col flex-1 lg:pl-36 lg:py-36 p-10">
        <div className="lg:w-1/4 w-full">
          <h1 className="text-[#161519] text-3xl lg:text-6xl font-semibold mb-4 lg:mb-10">
            ÖmerFarukErdoğan
          </h1>
          <p className="text-[#161519] mb-4 leading-relaxed text-sm lg:text-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Vestibulum luctus ex ac ipsum auctor
            convallis.
          </p>
          <p className="text-[#161519] leading-relaxed text-sm lg:text-normal">
            Morbi sodales congue odio sed rhoncus. Proin odio quam, suscipit nec
            commodo vestibulum, malesuada a erat. Mauris dignissim mattis
            iaculis. Vestibulum vestibulum tincidunt lectus at Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra
          </p>
        </div>
        <Image
          src={"/images/about-me-pc-camera.png"}
          width={2200}
          height={1100}
          alt="pc camera"
          className="absolute right-[-15%] md:bottom-[20%] bottom-[38%] w-[80%] md:w-[100%] object-contain"
        />
      </div>
      <AboutSkills />
    </div>
  );
};

export default AboutPage;
