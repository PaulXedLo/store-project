"use client";
import { motion, AnimatePresence } from "framer-motion";
import type { PageProps } from "@/app/types/Page";
const productPageVariants = {
  initial: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
export default function NextPage({
  products,
  productPage,
  showPageOptions,
  setShowPageOptions,
  handlePageChange,
  productsPerPage,
}: PageProps) {
  return (
    <motion.div
      onMouseEnter={() => setShowPageOptions(true)}
      onMouseLeave={() => setShowPageOptions(false)}
      className="bg-gray-900 dark:bg-gray-600  text-xl font-bold fixed bottom-6 left-1/2 z-20 px-4 py-1 rounded-full justify-center"
    >
      <div className="flex items-center justify-center" />
      <span className="text-white dark:text-gray-200">
        {productPage}
        <AnimatePresence>
          {showPageOptions && (
            <motion.span
              key="page2"
              onClick={handlePageChange}
              variants={productPageVariants}
              initial="initial"
              animate="visible"
              exit="initial"
              className="cursor-pointer text-gray-400 ml-3 dark:text-gray-300"
            >
              {productPage < Math.ceil(products.length / productsPerPage)
                ? "Next"
                : "First"}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.div>
  );
}
