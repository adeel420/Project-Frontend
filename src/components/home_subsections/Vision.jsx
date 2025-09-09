import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { visionData } from "../../data/Data";
import { assets } from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".horizontal-section");
    const container = containerRef.current;

    // Set container width to hold all sections horizontally
    gsap.set(container, {
      width: `${sections.length * 100}%`,
      display: "flex",
    });

    // Set each section to take full viewport width
    gsap.set(".horizontal-section", {
      width: "100vw",
      flexShrink: 0,
    });

    // Create the horizontal scrolling animation
    let scrollTween = gsap.to(container, {
      x: () => -((sections.length - 1) * window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container.parentNode,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => "+=" + (container.scrollWidth - window.innerWidth),
        markers: false, // Set to true for debugging, then false for production
      },
    });

    // Clean up function
    return () => {
      if (scrollTween && scrollTween.scrollTrigger) {
        scrollTween.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      <div ref={containerRef} className="h-screen flex">
        {/* 1st Section */}
        <div
          className="horizontal-section flex-shrink-0 w-screen h-screen relative"
          style={{ width: "100vw", height: "100vh" }}
        >
          <img
            src={assets.creativityBg}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col gap-2 md:gap-4 px-4">
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

        {/* 2nd Section */}
        <div
          className="horizontal-section flex-shrink-0 w-screen h-screen flex flex-col md:flex-row items-start gap-6 md:gap-10 px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-32 relative"
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${assets.creativityBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left: Text */}
          <div className="flex-1 flex flex-col gap-4 text-white justify-center px-2 sm:px-4">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
              PLANT YOUR VISION
            </span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
              BEHIND EACH PIXEL
            </span>
          </div>

          {/* Right: Cards */}
          <div className="flex-1 flex flex-wrap gap-4 sm:gap-6 justify-center items-center px-2 sm:px-4">
            {visionData.map((data) => (
              <div
                key={data.id}
                className="w-full sm:w-[48%] md:w-[45%] lg:w-[40%] p-4 sm:p-6 rounded-xl bg-gray-900 flex flex-col gap-2"
              >
                <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white">
                  {data.title}
                </h1>
                <p
                  className="text-sm sm:text-base md:text-lg text-gray-300"
                  dangerouslySetInnerHTML={{ __html: data.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

{
  /* 301 Labs */
}
// <div className="">
//   <img src={assets.labs} alt="" />
// </div>
