import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/app/types/Products";
export default function ProductCard({ product }: { product: Product }) {
  const [expandedDesc, setExpandedDesc] = useState(false);
  const maxLength = 120;
  const shortDescription =
    product.description.length > maxLength && !expandedDesc
      ? product.description.slice(0, maxLength) + "..."
      : product.description;
  return (
    <div className="w-full flex flex-col items-center justify-between sm:w-100 h-auto bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-64 relative mb-4">
        <Image
          src={product.image}
          alt={product.title}
          className="object-contain  cursor-pointer hover:opacity-80 rounded-lg"
          fill
        />
      </div>
      <h2 className="text-xl text-center font-semibold mt-4 text-gray-800 dark:text-white">
        {product.title}
      </h2>
      <div className="overflow-y-auto max-h-32">
        <p className="text-slate-800 dark:text-gray-500 mt-2 text-center">
          {shortDescription}
          {product.description.length > maxLength && (
            <button
              onClick={() => setExpandedDesc((e) => !e)}
              className="ml-2 text-black font-bold dark:text-white cursor-pointer bg-transparent border-0 p-0"
            >
              {expandedDesc ? "Show less" : "Read more"}
            </button>
          )}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full mt-6">
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-4">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex items-center gap-2">
          <button className="mt-3 cursor-pointer px-6 py-2 shadow-xl rounded-md hover:bg-purple-600  bg-purple-500 text-white ">
            Purchase
          </button>
          <button className="mt-3 cursor-pointer px-6 py-2 shadow-xl rounded-md hover:bg-gray-600  bg-gray-500 text-white ">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
