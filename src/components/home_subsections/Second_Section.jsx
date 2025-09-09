import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Second_Section = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 90%", // heading ke thoda screen me dikhte hi trigger ho
        onEnter: () => {
          headingRef.current.style.backgroundImage =
            "linear-gradient(90deg, #8e44ad, #3498db)";
          headingRef.current.style.color = "transparent";
          headingRef.current.style.backgroundClip = "text";
          headingRef.current.style.webkitBackgroundClip = "text";
        },
        onLeaveBack: () => {
          headingRef.current.style.backgroundImage = "none";
          headingRef.current.style.color = "white";
        },
      });
    }
  }, []);

  return (
    <div className="text-white flex flex-col items-center justify-center px-6 py-32 sm:px-32">
      {/* Paragraph */}
      <div className="w-full max-w-[800px] text-center flex flex-col items-center gap-6 justify-center">
        <p className="text-lg sm:text-xl leading-relaxed opacity-50">
          와루는 트랜드의 흐름을 앞장서 기술들을 개발해 고객들의 비전이 성공할
          수 있도록 지속적으로 노력합니다. 고객님의 성장에 도움이 되고자 각
          분야의 전문가들이 모여 하나의 나무가 되었습니다. 와루는 고객님과 함께,
          고객님의 아이디어를 현실로 만들어나갑니다.
        </p>
      </div>

      {/* Large H1 with gradient fill on scroll */}
      <div className="mt-16 bg-black flex items-center justify-center">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-5xl font-extrabold text-center leading-tight"
          style={{
            color: "white", // initially white
            transition: "all 0.3s ease",
          }}
        >
          BEYOND DESIGN AND TECHNOLOGY, <br /> TO MARKETING
        </h1>
      </div>
    </div>
  );
};

export default Second_Section;
