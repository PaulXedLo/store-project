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
export default function Hero({
  headerText,
  paragraphText,
  sourcePath,
}: {
  headerText: string;
  sourcePath: string;
  paragraphText: string;
}) {
  return (
    <section className="relative w-full mt-8 h-50 bg-gray-100 dark:bg-gray-900 text-white">
      <motion.video
        variants={videoVariants}
        initial="hidden"
        animate="visible"
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        src={sourcePath}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="flex flex-col items-center">
        {/* Overlay to darken the video background */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <motion.h1
          variants={heroHeaderVariants}
          initial="hidden"
          animate="visible"
          className="mt-14 text-center text-3xl md:text-4xl font-semibold text-white  z-10"
        >
          {headerText}
        </motion.h1>
        <motion.p
          variants={heroParagraphVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-s md:text-xl text-gray-200 mt-2 z-10"
        >
          {paragraphText}
        </motion.p>
      </div>
    </section>
  );
}
