/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useFormHook from "@/app/hooks/useForm";
const previewContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const previewImageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
// ImagePreview component to display a preview of the uploaded image
export default function ImagePreview() {
  const { image } = useFormHook();
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    setIsLoaded(true);
  }, [image]);
  if (!isLoaded) return null;
  return (
    <motion.div
      variants={previewContainerVariants}
      initial="initial"
      animate="visible"
      className="min-w-120 h-auto flex flex-col items-center justify-center p-4 rounded-md"
    >
      <h2 className="text-2xl text-black dark:text-white font-semibold mb-4">
        Image Preview
      </h2>
      <motion.img
        variants={previewImageVariants}
        initial="initial"
        animate="visible"
        loading="lazy"
        key={image}
        src={image}
        alt="Product Preview"
        width={400}
        height={400}
        className="rounded-md shadow-lg"
        onError={() => setIsLoaded(false)}
      />
    </motion.div>
  );
}
