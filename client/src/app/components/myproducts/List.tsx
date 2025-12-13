import { useProductStore } from "@/app/store/useProductStore";
import Button from "../ui/Button";
import Link from "next/link";
import MyProduct from "./Product";
import { toast, Toaster } from "sonner";

export function MyProductsList() {
  const { myproducts } = useProductStore();

  const deletedProductNotification = (productName: string) => {
    toast.success(`Product "${productName}" removed successfully!`, {
      description: "You can add more products anytime.",
    });
  };

  return (
    <section className="flex-1 py-6 px-4 flex flex-col items-center justify-center w-full  dark:bg-gray-900">
      <Toaster position="top-center" richColors />

      {myproducts.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {myproducts.map((product) => (
            <MyProduct
              key={product.id}
              product={product}
              deletedProductNotification={deletedProductNotification}
            />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col gap-5 items-center justify-center h-64">
          <p className="text-black dark:text-white text-2xl font-semibold">
            No products listed yet
          </p>
          <Link href="/products/addproduct">
            <Button>Add a new product</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
