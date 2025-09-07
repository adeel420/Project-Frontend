import React from "react";
import DarkVeil from "../../animations/DarkVeil";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-white bg-custom overflow-hidden relative"
      // 👆 overflow-x-hidden ko replace karke overflow-hidden use kiya
      style={{ fontFamily: "Noto Sans KR" }}
    >
      {/* Background / Animation */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
        <DarkVeil />
      </div>

      {/* Wrapper for text animations */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        // 👆 Yahan bhi overflow-hidden daala
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* WISE ROOTREE */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-snug"
          style={{ fontFamily: "Abril Fatface" }}
          variants={{
            hidden: { x: 0, opacity: 1 },
            visible: {
              x: -1000,
              opacity: 0,
              transition: { duration: 1.5, ease: "easeInOut" },
            },
          }}
        >
          WISE ROOTREE
        </motion.h1>

        {/* PROJECT OF PROJECT */}
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 sm:mt-6 md:mt-8 leading-snug"
          style={{ fontFamily: "Abril Fatface" }}
          variants={{
            hidden: { x: 1000, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 12,
                duration: 1.5,
                delay: 1.5,
              },
            },
          }}
        >
          PROJECT OF PROJECT
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Hero;
