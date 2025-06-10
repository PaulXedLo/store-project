import { useProductStore } from "@/app/store/useProductStore";
import ProductCard from "./Card";
import { useSearchStore } from "@/app/store/useSearchStore";
import { useMemo, useState } from "react";
export default function ProductList() {
  const [productPage] = useState(1);
  const { products } = useProductStore();
  const { search } = useSearchStore();
  const productsPerPage = 9;

  // Filter products based on search input

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // Paginate products

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (productPage - 1) * productsPerPage,
      productPage * productsPerPage
    );
  }, [filteredProducts, productPage]);
  return (
    <div className="flex flex-col md:flex-wrap md:flex-row gap-3 w-full min-h-auto">
      {paginatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
