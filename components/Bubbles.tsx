import { Circle } from "lucide-react";
import React from "react";

type Props = {};

const Bubbles = (props: Props) => {
  return (
    <>
      <div className="absolute bg-red-500 w-full aspect-square top-0 right-0 z-0 rounded-full overflow-hidden translate-x-1/2 -translate-y-1/2"></div>
      {/* <div className="absolute bg-blue-500 w-1/2 aspect-square top-0 right-0 "></div> */}
    </>
  );
};

export default Bubbles;

// bg-[#F7F7F7]
// bg-[#FDFDFD]
