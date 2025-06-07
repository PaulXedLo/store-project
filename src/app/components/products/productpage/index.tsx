"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";
import type { Product } from "@/app/types/Products";
import ProductViewOptions from "../filter/ProductViewOptions";
import ProductPageTitle from "./Title";
import ProductList from "./List";
import ErrorPage from "./ErrorPage";

const productInfoVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const productPageVariants = {
  initial: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPageOptions, setShowPageOptions] = useState(false);
  const [productPage, setProductPage] = useState(1);

  const productsPerPage = 9;
  const paginatedProducts = products.slice(
    (productPage - 1) * productsPerPage,
    productPage * productsPerPage
  );
  // Handle page change
  function handlePageChange() {
    if (productPage < Math.ceil(products.length / productsPerPage)) {
      setProductPage((prevPage) => prevPage + 1);
    } else {
      setProductPage(1);
    }
  }
  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {/* If no products are available, show an error page */}
      {products.length === 0 && !loading ? (
        <ErrorPage />
      ) : (
        <section className="bg-gray-200 dark:bg-gray-900 min-h-screen">
          <motion.section
            variants={productInfoVariants}
            initial="initial"
            animate="animate"
            className="shadow-lg  max-w-7xl mx-auto px-4 py-5"
          >
            <ProductPageTitle />
            <ProductViewOptions />
          </motion.section>
          {/*Product list */}
          {loading ? (
            <div className="flex mt-8 items-center justify-center ">
              <SyncLoader color="white" size={15} />
            </div>
          ) : (
            <motion.section className="max-w-7xl mx-auto px-4 py-8">
              <ProductList products={paginatedProducts} />
              {/*Next page floating buttons */}
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
                        {productPage <
                        Math.ceil(products.length / productsPerPage)
                          ? "Next"
                          : "First"}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.div>
            </motion.section>
          )}
        </section>
      )}
    </>
  );
}
