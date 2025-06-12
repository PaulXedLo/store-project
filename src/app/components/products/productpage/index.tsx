"use client";
import { motion } from "framer-motion";
import { SyncLoader } from "react-spinners";
import ProductPageTitle from "./Title";
import ProductList from "./List";
import ErrorPage from "./ErrorPage";
import NextPage from "./NextPage";
import ProductViewOptions from "./FilterOptions";
import { useFilteredProducts } from "@/app/hooks/useFilteredProducts";

const productInfoVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function ProductPage() {
  const { paginatedProducts, products, loading } = useFilteredProducts();
  return (
    <>
      {/* If no products are available, show an error page */}
      {products.length === 0 && !loading ? (
        <ErrorPage />
      ) : (
        <section className="bg-gray-200 dark:bg-gray-900 min-h-screen">
          <motion.div
            variants={productInfoVariants}
            initial="initial"
            animate="animate"
            className="shadow-lg  max-w-7xl mx-auto px-4 py-5"
          >
            {/* Product page title and view options */}
            <ProductPageTitle />
            <ProductViewOptions />
          </motion.div>
          {/*Product list */}
          {loading ? (
            <div className="flex mt-20 items-center justify-center ">
              <SyncLoader color="white" size={15} />
            </div>
          ) : (
            <motion.section className="max-w-7xl min-w-7xl mx-auto px-4 py-8">
              {/*Product list with pagination  */}
              {paginatedProducts.length > 0 ? (
                <ProductList paginatedProducts={paginatedProducts} />
              ) : (
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <h1 className="text-2xl mt-20">No products found</h1>
                </div>
              )}
              {/*Next page floating buttons */}
              <NextPage />
            </motion.section>
          )}
        </section>
      )}
    </>
  );
}
