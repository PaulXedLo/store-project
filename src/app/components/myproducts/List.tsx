import { useProductStore } from "@/app/store/useProductStore";
import Button from "../ui/Button";
import Link from "next/link";
import MyProduct from "./Product";
import { toast, Toaster } from "sonner";
export function MyProductsList() {
  // Access the product store to get the list of products
  const { myproducts } = useProductStore();
  const deletedProductNotification = (productName: string) => {
    // Show a success message after removing the product
    toast.success(`Product ${productName} removed successfully!`, {
      description: "You can add more products anytime.",
    });
  };
  return (
    <section className="flex-1 py-2 flex flex-col items-center justify-center w-full bg-gray-100 dark:bg-gray-900">
      <Toaster position="top-center" richColors />
      <div className="w-full flex flex-col items-center justify-center p-4">
        {myproducts.length > 0 ? (
          <ul className="min-w-full md:flex-wrap md:w-full flex-col md:flex-row  md:gap-4 flex justify-center max-w-md space-y-4">
            {/*Map through my products */}
            {myproducts.map((product) => (
              <MyProduct
                deletedProductNotification={deletedProductNotification}
                key={product.id}
                product={product}
              />
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
