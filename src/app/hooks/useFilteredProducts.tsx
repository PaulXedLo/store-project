import { useEffect, useMemo } from "react";
import { useProductStore } from "../store/useProductStore";
import { useSearchStore } from "../store/useSearchStore";
// Custom hook to filter, sort, and paginate products
const productsPerPage = 9;
export function useFilteredProducts() {
  // Access product store and search store
  const {
    products,
    loading,
    fetchProducts,
    productPage,
    category,
    sortOption,
  } = useProductStore();
  const { search } = useSearchStore();
  // Fetch products on mount
  useEffect(() => {
    if (products.length === 0) fetchProducts();
  }, [fetchProducts, products.length]);
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const titleMatch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const categoryMatch =
        category === "all" ||
        product.category.toLowerCase() === category.toLowerCase();
      return titleMatch && categoryMatch;
    });
  }, [products, search, category]);

  // Sort
  const sortedProducts = useMemo(() => {
    switch (sortOption) {
      case "relevance":
        return filteredProducts;
      case "latest":
        return [...filteredProducts].sort(
          (a, b) => Number(b.id) - Number(a.id)
        );
      case "price - low to high":
        return [...filteredProducts].sort((a, b) => a.price - b.price);
      case "price - high to low":
        return [...filteredProducts].sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  }, [filteredProducts, sortOption]);

  // Paginate
  const paginatedProducts = useMemo(() => {
    return sortedProducts.slice(
      (productPage - 1) * productsPerPage,
      productPage * productsPerPage
    );
  }, [sortedProducts, productPage]);
  return {
    paginatedProducts,
    products,
    loading,
  };
}
