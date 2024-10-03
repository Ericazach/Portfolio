import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col h-full  md:flex-row justify-center items-center mx-4 md:mx-8 lg:mx-16">
      <div className="h-1/2 w-full md:w-full relative md:h-full ">
        <Image
          src="/girl.png"
          alt="Erica's Profile"
          fill
          className="object-contain px-4 md:px-8 lg:px-16"
        />
      </div>
      <div className="h-1/2 w-full md:w-full md:h-full flex-col flex justify-center items-center">
        <h1 className="text-5xl font-bold text-center text-white">
          Erica Portfolio
        </h1>
        <p className="text-2xl text-center text-white">
          Modern & Minimalist Portfolio Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis ut, iste dolor, consequuntur eligendi
          natus distinctio totam similique et saepe incidunt sed expedita maxime
          sequi eaque aut qui dolorem quidem?
        </p>
      </div>
    </div>
  );
};

export default Hero;
