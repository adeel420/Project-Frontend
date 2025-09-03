import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { visionData } from "../../data/Data";
import { assets } from "../../assets/assets";

const Vision = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  const leftVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <div
        ref={containerRef}
        className="text-white flex flex-col md:flex-row items-start px-6 py-16 sm:px-8 lg:py-32 gap-10 bg-black"
      >
        {/* Left-section with animation */}
        <motion.div
          className="text-3xl sm:text-4xl lg:text-5xl font-bold flex flex-col gap-2 w-full md:w-1/2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.h1 variants={leftVariants}>PLANT YOUR VISION</motion.h1>
          <motion.h1 variants={leftVariants}>BEHIND EACH PIXEL</motion.h1>
        </motion.div>

        {/* Right-section with animation */}
        <motion.div
          className="w-full md:w-1/2 flex flex-wrap gap-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {visionData.map((data, i) => (
            <motion.div
              className="w-full flex flex-col gap-2 sm:w-[48%] lg:w-[45%] p-4 rounded-xl bg-gray-900"
              key={data.id}
              custom={i}
              variants={itemVariants}
            >
              <motion.h1
                className="font-bold text-lg"
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {data.title}
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: data.desc }}
                whileInView={{
                  opacity: [0, 1],
                }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 301 Labs */}
      <div className="">
        <img src={assets.labs} alt="" />
      </div>
    </>
  );
};

export default Vision;
