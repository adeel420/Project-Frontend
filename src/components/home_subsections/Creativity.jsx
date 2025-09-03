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

      {/* Img */}
      <div className="relative w-full">
        <img
          src={assets.creativityBg}
          className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-2 md:gap-4">
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold">
            디자인은 메세지를 담고
          </span>
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold">
            마케팅은 고객의
          </span>
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold">
            마음을 움직입니다
          </span>
        </div>
      </div>
    </>
  );
};

export default Creativity;
