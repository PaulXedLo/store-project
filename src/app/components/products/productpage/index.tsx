"use client";
import { motion } from "framer-motion";
import { SyncLoader } from "react-spinners";
import { useEffect, useMemo } from "react";
import ProductPageTitle from "./Title";
import ProductList from "./List";
import ErrorPage from "./ErrorPage";
import NextPage from "./NextPage";
import ProductViewOptions from "../../ui/ProductViewOptions";
import { useProductStore } from "@/app/store/useProductStore";
import { useSearchStore } from "@/app/store/useSearchStore";

const productInfoVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductPage() {
  const { products, fetchProducts, productPage, loading } = useProductStore();
  const { search } = useSearchStore();
  const productsPerPage = 9;
  // Filtered products based on search input
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // Paginate products
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (productPage - 1) * productsPerPage,
      productPage * productsPerPage
    );
  }, [filteredProducts, productPage]);
  // Fetch products on component mount
  useEffect(() => {
    if (products.length === 0) fetchProducts();
  });
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
            {/* Product page title and view options */}
            <ProductPageTitle />
            <ProductViewOptions />
          </motion.section>
          {/*Product list */}
          {loading ? (
            <div className="flex mt-20 items-center justify-center ">
              <SyncLoader color="white" size={15} />
            </div>
          ) : (
            <motion.section className="max-w-7xl mx-auto px-4 py-8">
              {/*Product list with pagination  */}
              <ProductList paginatedProducts={paginatedProducts} />
              {/*Next page floating buttons */}
              <NextPage />
            </motion.section>
          )}
        </section>
      )}
    </>
  );
}
