import { useProductStore } from "@/app/store/useProductStore";
import ProductCard from "./Card";
import type { Product } from "@/app/types/Products";
import { useSearchStore } from "@/app/store/useSearchStore";

export default function ProductList({
  paginatedProducts,
}: {
  paginatedProducts?: Product[];
}) {
  const { products } = useProductStore();
  const { search } = useSearchStore();

  console.log("Products:", products);
  console.log("Search:", search);
  return (
    <div className="flex flex-col md:flex-wrap md:flex-row gap-3 w-full min-h-auto">
      {paginatedProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
