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
    <motion.li
      key={product.id}
      variants={productVariants}
      initial="hidden"
      animate="visible"
      whileHover="onHover"
      className="w-full max-w-sm sm:max-w-md md:max-w-lg p-4 flex flex-col gap-4 shadow-md bg-white dark:bg-gray-800 rounded-lg"
    >
      {/* Header with ID */}
      <h2 className="text-sm text-start text-gray-500 dark:text-gray-400 font-medium">
        ID: {product.id}
      </h2>

      {/* Product Image */}
      <div className="w-full flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="rounded object-contain w-full h-48 sm:h-52"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center gap-2 px-2">
        <h2 className="text-lg sm:text-xl text-black dark:text-white text-center font-semibold">
          {product.title}
        </h2>
        <p className="w-full text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center line-clamp-3">
          {product.description}
        </p>
      </div>

      {/* Footer: Price and Delete */}
      <div className="flex items-center justify-between mt-4 px-2">
        <p className="text-gray-700  dark:text-gray-300 text-base sm:text-lg font-bold">
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
  );
}
