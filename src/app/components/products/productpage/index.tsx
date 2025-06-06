"use client";
import { motion } from "framer-motion";
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";
import type { Product } from "@/app/types/Products";
import ProductViewOptions from "../filter/ProductViewOptions";
import ProductPageTitle from "./Title";
import ProductList from "./List";
const productInfoVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  // if (products.length === 0) {
  //   return (
  //     <section className="bg-gray-200 dark:bg-gray-900 min-h-100 flex items-center justify-center">
  //       <div className="text-center flex-col flex gap-6">
  //         <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
  //           No Products Available
  //         </h1>
  //         <p className="text-gray-600 dark:text-gray-400">
  //           Please check back later.
  //         </p>
  //       </div>
  //     </section>
  //   );
  // }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return (
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
          <ProductList products={products} />
        </motion.section>
      )}
    </section>
  );
}
