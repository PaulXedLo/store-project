import ProductCard from "./Card";
import type { Product } from "@/app/types/Products";

export default function ProductList({
  paginatedProducts,
}: {
  paginatedProducts?: Product[];
}) {
  return (
    // Display a list of product cards
    <div className="flex flex-col md:flex-wrap md:flex-row gap-3 w-full min-h-auto">
      {paginatedProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
