import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductState } from "../types/Products";

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      // Initial state
      products: [],
      myproducts: [],
      category: "all",
      sortOption: "relevance",
      filterByCategory: [
        "all",
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics",
      ],
      sortBy: [
        "relevance",
        "latest",
        "price - low to high",
        "price - high to low",
      ],
      loading: true,
      productsPerPage: 9,
      productPage: 1,
      showPageOptions: false,
      // State setters
      setProductPage: (page) => set({ productPage: page }),
      setShowPageOptions: (show) => set({ showPageOptions: show }),
      setLoading: (loading) => set({ loading }),
      setCategory: (category) => set({ category }),
      setSortOption: (sortOption) => set({ sortOption }),
      // Fetch products from the API
      fetchProducts: async () => {
        set({ loading: true });
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        set({ products: data });
        set({ loading: false });
      },
      // Add product to the store
      addProduct: async (product) => {
        // Post the product to the API
        const res = await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        if (!res.ok) {
          throw new Error("Failed to add product");
        } else {
          // If the product is successfully added, update the store
          const newProduct = await res.json();
          product = newProduct;
          set((state) => {
            const existingProduct = state.products.find(
              (p) => p.id === product.id
            );

            const updatedProducts = existingProduct
              ? state.products.map((p) => (p.id === product.id ? product : p))
              : [...state.products, product];

            return {
              products: updatedProducts,
              myproducts: [...state.myproducts, product],
            };
          });
        }
      },
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
