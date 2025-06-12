"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { Product } from "@/app/types/Products";
import { useProductStore } from "@/app/store/useProductStore";
import { useCallback } from "react";
const productVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  onHover: {
    scale: 1.05,
  },
};
export default function MyProduct({
  product,
  deletedProductNotification,
}: {
  product: Product;
  deletedProductNotification: (productName: string) => void;
}) {
  const { removeProduct } = useProductStore();
  // Function to remove a product
  const handleRemoveProduct = useCallback(
    (id: number) => {
      removeProduct(id);
      deletedProductNotification(product.title);
      // Show a success message after removing the product
    },
    [removeProduct, product.title, deletedProductNotification]
  );
  return (
    <>
      <motion.li
        key={product.id}
        variants={productVariants}
        initial="hidden"
        animate="visible"
        whileHover="onHover"
        className="min-w-70 p-4  max-h-110 flex flex-col gap-5 shadow-md bg-white dark:bg-gray-800 rounded"
      >
        <div className="w-full">
          <h2 className="text-xl text-start text-black dark:text-white  font-semibold">
            ID: {product.id}
          </h2>
          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="mt-2 rounded object-contain w-full h-48"
          />
        </div>
        <div className="flex items-center flex-col gap-2">
          {/* Product Title and Description */}
          <h2 className="text-xl mt-4 text-black dark:text-white text-center font-semibold">
            {product.title}
          </h2>
          <p className="max-w-80 text-gray-600 dark:text-gray-300 text-[14px] text-center">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          {/* Product Price and Delete Button */}
          <p className="text-gray-600 dark:text-gray-400 text-xl font-bold">
            ${product.price}
          </p>
          <span
            onClick={() => handleRemoveProduct(product.id as number)}
            className="cursor-pointer"
          >
            <Button>Delete</Button>
          </span>
        </div>
      </motion.li>
    </>
  );
}
