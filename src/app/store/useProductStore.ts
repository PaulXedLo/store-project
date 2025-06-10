import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductState } from "../types/Products";

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      // Initial state
      products: [],
      loading: true,
      productsPerPage: 9,
      productPage: 1,
      showPageOptions: false,
      // State setters
      setProductPage: (page) => set({ productPage: page }),
      setShowPageOptions: (show) => set({ showPageOptions: show }),
      setLoading: (loading) => set({ loading }),
      // Fetch products from the API
      fetchProducts: async () => {
        set({ loading: true });
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        set({ products: data });
        set({ loading: false });
      },
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
    }),
    {
      name: "product-store",
    }
  )
);
