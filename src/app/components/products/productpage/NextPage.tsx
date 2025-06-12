"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useProductStore } from "@/app/store/useProductStore";
import { useCallback } from "react";
import { useFilteredProducts } from "@/app/hooks/useFilteredProducts";
import { useSearchStore } from "@/app/store/useSearchStore";
const productPageVariants = {
  initial: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
export default function NextPage() {
  const {
    productPage,
    setProductPage,
    showPageOptions,
    setShowPageOptions,
    productsPerPage,
  } = useProductStore();
  const { setSearch } = useSearchStore();
  const { filteredCount } = useFilteredProducts();
  // Handle page change
  const handlePageChange = useCallback(() => {
    const maxPage = Math.ceil(filteredCount / productsPerPage) || 1;
    if (productPage < maxPage) {
      setProductPage(productPage + 1);
    } else {
      setProductPage(1);
      setSearch("");
    }
  }, [productPage, filteredCount, productsPerPage, setProductPage, setSearch]);
  return (
    <motion.div
      onMouseEnter={() => setShowPageOptions(true)}
      onMouseLeave={() => setShowPageOptions(false)}
      className="bg-gray-900 dark:bg-gray-600  text-xl font-bold fixed bottom-6 md:left-1/2 left-[45%] z-20 px-4 py-1 rounded-full justify-center"
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
              {filteredCount === 0 ||
              productPage >= Math.ceil(filteredCount / productsPerPage)
                ? "First"
                : "Next"}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.div>
  );
}
