import React, { useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Second_Section = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0.5 }, // Start opacity
        {
          opacity: 1, // End opacity
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // jab element viewport ke 80% pe aayega
            end: "top 40%", // aur 40% tak animate hoga
            scrub: true, // smooth scroll-based animation
          },
        }
      );
    });
  }, []);

  return (
    <div className="text-white flex flex-col items-center justify-center px-6 py-32 sm:px-32">
      {/* Text Section */}
      <div className="w-full max-w-[366px] text-center flex flex-col items-center gap-6 justify-center">
        {[
          "와루는 트랜드의 흐름을 앞장서 기술들을 개발해 고객들의 비전이 성공할 수 있도록 지속적으로 노력합니다.",
          "고객님의 성장에 도움이 되고자 각 분야의 전문가들이 모여 하나의 나무가 되었습니다.",
          "와루는 고객님과 함께, 고객님의 아이디어를 현실로 만들어나갑니다.",
        ].map((line, i) => (
          <p
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            className="relative text-lg sm:text-xl leading-relaxed opacity-50" // start with low opacity
          >
            {line}
          </p>
        ))}
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
