import React from "react";
import { assets } from "../../assets/assets";

const Creativity = () => {
  return (
    <>
      <div className="text-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-32 sm:px-32 gap-12">
        {/* Text */}
        <div className="flex flex-col w-full lg:w-1/2 gap-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-snug z-40">
            <span className="text-[#4D22A7]">Innate creativity</span> stems from
            meticulous attention to detail. At Waru, we don't just produce;{" "}
            {/* Only In mobile device */}
            <div className="w-full flex justify-end md:hidden">
              <img
                src={assets.creativity}
                alt="Creativity"
                className="w-full relative top-[-70px] max-w-[300px] object-contain"
              />
            </div>
            <span className="text-[#949494]">
              we pay close attention to every pixel. We'll work with you to
              realize your vision.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            타고난 창의력은, 세밀한 디테일에서 나옵니다 <br />
            저희 와루는 단순 제작이 아닌 <br />
            모든 픽셀에 신경을 써서 <br />
            <br />
            당신의 비전을 함께 제작해나가겠습니다
          </p>
        </div>

        {/* Image */}
        <div className="hidden md:block w-full lg:w-1/2 flex justify-center">
          <img
            src={assets.creativity}
            alt="Creativity"
            className="w-full max-w-md lg:max-w-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Creativity;
