import React, { useState, useEffect, useRef } from "react";
import DarkVeil from "../../animations/DarkVeil";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [split, setSplit] = useState(false);

  const heroRef = useRef(null);
  const containerRef = useRef(null);

  const [maxX, setMaxX] = useState(0);

  // 👇 Global scroll progress (page based)
  const { scrollYProgress } = useScroll();

  // --- Calculate max horizontal scroll distance ---
  useEffect(() => {
    const updateMaxX = () => {
      if (containerRef.current) {
        const totalWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setMaxX(totalWidth - viewportWidth);
      }
    };
    updateMaxX();
    window.addEventListener("resize", updateMaxX);
    return () => window.removeEventListener("resize", updateMaxX);
  }, []);

  // ✅ Move cards horizontally (right → left)
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  // Animation trigger for WISE / ROOTREE
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      setSplit(false);
      const timer = setTimeout(() => setSplit(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-screen max-h-screen flex flex-col items-center justify-center text-white bg-custom overflow-hidden relative"
      style={{ fontFamily: "Noto Sans KR" }}
    >
      {/* Background */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
        <DarkVeil />
      </div>

      {/* Titles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* WISE */}
        <motion.span
          className="absolute font-bold"
          style={{
            fontFamily: "Abril Fatface",
            fontSize: split
              ? "clamp(1.2rem, 4vw, 2.5rem)"
              : "clamp(1.5rem, 8vw, 5rem)",
          }}
          initial={false}
          animate={
            split
              ? { top: "24px", left: "16px", x: 0, y: 0 }
              : { top: "50%", left: "50%", x: "-120%", y: "-50%" }
          }
          transition={{ duration: 1 }}
        >
          WISE
        </motion.span>

        {/* ROOTREE */}
        <motion.span
          className="absolute font-bold"
          style={{
            fontFamily: "Abril Fatface",
            fontSize: split
              ? "clamp(1.2rem, 4vw, 2.5rem)"
              : "clamp(1.5rem, 8vw, 5rem)",
          }}
          initial={false}
          animate={
            split
              ? { top: "85%", x: 200, y: 0 }
              : { top: "50%", left: "50%", x: "20%", y: "-50%" }
          }
          transition={{ duration: 1 }}
        >
          ROOTREE
        </motion.span>
      </div>

      {/* Horizontal scroll section */}
      {split && (
        <section className="relative w-full" style={{ height: "500vh" }}>
          {/* Sticky wrapper */}
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <motion.div
              ref={containerRef}
              style={{ x }}
              className="flex gap-6 px-6"
            >
              {Array.from({ length: 9 }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 h-[200px] w-[280px] md:w-[320px] bg-[#023f9a] rounded-xl shadow-lg flex items-center justify-center"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-center">
                    Project {i + 1}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Vertical scroll continues */}
      {split && (
        <section className="w-full min-h-screen bg-black flex items-center justify-center">
          <h2 className="text-3xl font-bold">Now vertical scroll starts 🚀</h2>
        </section>
      )}
    </div>
  );
};

export default Hero;
