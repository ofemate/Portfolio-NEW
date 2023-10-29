import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {};

const AboutSkills = (props: Props) => {
  const skills = [
    "Kurumsal Kimlik",
    "Logo",
    "Sosyal Medya Yönetimi",
    "Banner",
    "Reklam Tasarımı",
    "Web Tasarım",
    "Ambalaj Tasarımı",
    "Ürün Fotoğraf Çekimi",
  ];
  return (
    <div className="gradientBg w-full">
      <div className=" text-white p-6 md:p-24">
        <h2 className="text-[#F7F7F7] text-5xl md:text-7xl font-semibold">
          Neler <br /> Yapıyorum?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:w-1/2">
          {skills.map((skill) => (
            <p className="text-[#F7F7F7] md:text-2xl text-lg flex items-center gap-2">
              <ChevronRight className="text-[#6100A5]" /> {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
