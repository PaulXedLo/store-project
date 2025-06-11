"use client";
import { motion } from "framer-motion";
const videoVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
export default function AddProductHero() {
  return (
    <section className="relative w-full  h-50 bg-gray-100 dark:bg-gray-900 text-white">
      <motion.video
        variants={videoVariants}
        initial="hidden"
        animate="visible"
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        src="/addproductbackground.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="flex flex-col items-center">
        <h1 className="mt-14 text-center text-3xl md:text-4xl font-semibold text-white  z-10">
          Add a new product
        </h1>
        <p className="text-center text-s md:text-xl text-gray-200 mt-2 z-10">
          Share your products with the world and manage your inventory easily.
        </p>
      </div>
    </section>
  );
}
