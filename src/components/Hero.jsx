"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        alt=""
        src="/library.webp"
        width={800}
        height={600}
        className="w-full h-[50vh] md:h-screen"
      />
      <div className="absolute top-0 left-0 backdrop-blur-sm right-0 bottom-0 bg-transparentBlack flex justify-center items-center">
        <h1 className="uppercase font-Mont text-3xl md:text-4xl lg:text-6xl text-center font-bold leading-none">
          Read Books, <br />
          Unleash Your Creativity.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
