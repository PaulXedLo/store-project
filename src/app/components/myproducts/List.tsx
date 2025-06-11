import { useProductStore } from "@/app/store/useProductStore";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
const productVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  onHover: {
    scale: 1.05,
  },
};
export function MyProductsList() {
  // Access the product store to get the list of products
  const { myproducts } = useProductStore();
  return (
    <section className="flex-1 py-2 flex flex-col items-center justify-center w-full bg-gray-100 dark:bg-gray-900">
      <div className="w-full flex flex-col items-center justify-center p-4">
        {myproducts.length > 0 ? (
          <ul className="w-80 md:w-full flex-col md:flex-row md:gap-4 flex justify-center max-w-md space-y-4">
            {/*Map through my products */}
            {myproducts.map((product) => (
              <motion.li
                key={product.id}
                variants={productVariants}
                initial="hidden"
                animate="visible"
                whileHover="onHover"
                className="p-4 flex flex-col gap-5 shadow-md bg-white dark:bg-gray-800 rounded"
              >
                <div className="w-full">
                  {/* Product Image */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="mt-2 rounded object-contain w-full h-48"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {/* Product Title and Description */}
                  <h2 className="text-xl mt-4 text-black dark:text-white text-center font-semibold">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  {/* Product Price and Delete Button */}
                  <p className="text-gray-600 dark:text-gray-400 text-xl font-bold">
                    ${product.price}
                  </p>
                  <Button>Delete</Button>
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          // If no products are available, show a message and a button to add a new product
          <div className="flex flex-col  gap-5 items-center justify-center h-64">
            <p className="text-black dark:text-white text-2xl font-semibold">
              No products listed yet
            </p>

            <Link href="/products/addproduct">
              <Button>Add a new product</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
