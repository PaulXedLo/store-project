"use client";
import { motion } from "framer-motion";
const videoVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
const heroHeaderVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const heroParagraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
export default function Hero() {
  return (
    <>
      <div className="flex gap-4 justify-center flex-col items-center h-80 bg-gray-100 dark:bg-gray-900 text-white">
        <motion.video
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 "
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.h1
          variants={heroHeaderVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl font-semibold z-10 text-center "
        >
          Welcome
        </motion.h1>
        <motion.p
          variants={heroParagraphVariants}
          initial="hidden"
          animate="visible"
          className=" text-center z-10 px-4"
        >
          DreamStore helps independent entrepreneurs and small businesses build
          their online presence and sell their products with ease.
        </motion.p>
      </div>
    </>
  );
}
