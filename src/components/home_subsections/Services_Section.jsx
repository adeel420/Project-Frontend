import React, { useRef, useEffect, useState } from "react";

const Services_Section = () => {
  const textRefs = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!textRefs.current.length) return;

    textRefs.current.forEach((textElement, index) => {
      if (!textElement) return;

      const rect = textElement.getBoundingClientRect();
      const distanceX = Math.abs(
        mousePosition.x - (rect.left + rect.width / 2)
      );
      const distanceY = Math.abs(
        mousePosition.y - (rect.top + rect.height / 2)
      );
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Calculate twist effect based on distance from mouse
      const maxDistance = 300;
      const intensity = Math.max(0, 1 - distance / maxDistance);

      // Apply transformation
      textElement.style.transform = `
        perspective(1000px) 
        rotateY(${intensity * 10}deg) 
        rotateX(${intensity * -5}deg) 
        skew(${intensity * 2}deg, ${intensity * -1}deg)
        scale3d(${1 + intensity * 0.05}, ${1 + intensity * 0.05}, 1)
      `;
      textElement.style.filter = `blur(${intensity * 1.5}px)`;
      textElement.style.opacity = `${1 - intensity * 0.2}`;
    });
  }, [mousePosition]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Top right Korean text */}
      <div className="absolute top-8 right-8 text-right text-white text-sm leading-relaxed max-w-xs z-20">
        <p>다양한 시각과 전략으로</p>
        <p>당신의 브랜드를 뿌리부터 열매가 </p>
        <p>열릴때까지 함께 성장시키는 와루입니다.</p>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen mt-30 sm:mt-0 px-8 md:px-16 lg:px-24">
        <div className="space-y-12 md:space-y-16">
          {[
            { eng: "Planning", kor: "기획" },
            { eng: "UI/UX DESIGN", kor: "디자인" },
            { eng: "Program Development", kor: "프로그램 개발" },
            { eng: "AI artificial intelligence", kor: "AI 인공지능" },
            { eng: "Marketing", kor: "마케팅" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-center sm:justify-start sm:flex-row items-center gap-2 text-center sm:text-left"
            >
              <h2
                ref={(el) => (textRefs.current[index] = el)}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white transition-all duration-300 ease-out"
                style={{
                  textShadow: "0 0 10px rgba(255,255,255,0.5)",
                  transformStyle: "preserve-3d",
                  willChange: "transform, filter, opacity",
                }}
              >
                {item.eng}
              </h2>
              <span
                ref={(el) => (textRefs.current[index + 5] = el)}
                className="text-base sm:text-lg text-white/70 transition-all duration-300 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, filter, opacity",
                }}
              >
                {item.kor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services_Section;
