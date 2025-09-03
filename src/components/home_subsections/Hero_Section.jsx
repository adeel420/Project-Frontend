import React from "react";
import DarkVeil from "../../animations/DarkVeil";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-white bg-custom"
      style={{ fontFamily: "Noto Sans KR" }}
    >
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DarkVeil />
      </div>
      <div className="absolute flex flex-col text-center sm:text-left max-w-[900px]">
        {/* Year */}
        <p className="hidden sm:block text-sm sm:text-base md:text-lg">@2025</p>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          style={{ fontFamily: "Abril Fatface" }}
        >
          WISE ROOTREE
        </h1>

        {/* Subtitle */}
        <p className="hidden sm:block text-xs sm:text-base md:text-lg lg:text-lg mt-4 sm:mt-6 self-center sm:self-end w-full sm:max-w-[350px]">
          A business partner who will make your vision come true <br />
          Create it with us
        </p>
      </div>
    </div>
  );
};

export default Hero;
