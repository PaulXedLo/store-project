import ProductCard from "./Card";
import type { Product } from "@/app/types/Products";
export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col md:flex-wrap md:flex-row gap-3 w-full min-h-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
