import React from "react";
import { assets } from "../../assets/assets";

const Second_Section = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center px-6 py-32 sm:px-32">
      {/* Text Section */}
      <div className="w-full max-w-[366px] text-center flex flex-col items-center gap-4 justify-center">
        <p>
          와루는 트랜드의 흐름을 앞장서 기술들을 개발해 고객들의 비전이 성공할
          수 있도록 지속적으로 노력합니다.
        </p>
        <p>
          고객님의 성장에 도움이 되고자 각 분야의 전문가들이 모여 하나의 나무가
          되었습니다.
        </p>
        <p>와루는 고객님과 함께, 고객님의 아이디어를 현실로 만들어나갑니다.</p>
      </div>

      {/* Image Section */}
      <img
        src={assets.text}
        className="
          mt-16 sm:mt-20 
          w-full max-w-[300px] sm:max-w-[400px] 
          md:max-w-[700px] lg:max-w-[900px] 
          h-auto
        "
        alt="Text Graphic"
      />
    </div>
  );
};

export default Second_Section;
