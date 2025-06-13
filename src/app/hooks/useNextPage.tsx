import { useCallback, useEffect, useState } from "react";
import { useProductStore } from "../store/useProductStore";
import { useSearchStore } from "../store/useSearchStore";
import { useFilteredProducts } from "./useFilteredProducts";

export function useNextPage() {
  const {
    productPage,
    setProductPage,
    showPageOptions,
    setShowPageOptions,
    productsPerPage,
  } = useProductStore();
  const { setSearch } = useSearchStore();
  const { filteredCount } = useFilteredProducts();

  const [visibility, setVisibility] = useState(false);

  const handlePageChange = useCallback(() => {
    const maxPage = Math.ceil(filteredCount / productsPerPage) || 1;
    if (productPage < maxPage) {
      setProductPage(productPage + 1);
    } else {
      setProductPage(1);
      setSearch("");
    }
  }, [productPage, filteredCount, productsPerPage, setProductPage, setSearch]);

  useEffect(() => {
    const handleScroll = () => {
      setVisibility(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    visibility,
    productPage,
    showPageOptions,
    setShowPageOptions,
    handlePageChange,
    filteredCount,
    productsPerPage,
  };
}
