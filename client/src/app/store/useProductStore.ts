import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductState } from "../types/Products";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5198";

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      // State
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

      // Actions
      setProductPage: (page) => set({ productPage: page }),
      setShowPageOptions: (show) => set({ showPageOptions: show }),
      setLoading: (loading) => set({ loading }),
      setCategory: (category) => set({ category }),
      setSortOption: (sortOption) => set({ sortOption }),

      fetchProducts: async () => {
        set({ loading: true });
        try {
          const response = await fetch(`${BASE_URL}/api/products`);
          if (!response.ok) throw new Error("Failed to fetch products");
          
          const data = await response.json();
          set({ products: data, loading: false });
        } catch (error) {
          console.error(error);
          set({ loading: false });
        }
      },

      addProduct: async (product) => {
        try {
          const { id, ...productWithoutId } = product;

          const payload = {
            ...productWithoutId,
            price: Number(product.price) || 0,
            image: product.image || "",
            description: product.description || "",
            category: product.category || "electronics"
          };

          const response = await fetch(`${BASE_URL}/api/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!response.ok) throw new Error("Failed to add product");

          const newProduct = await response.json();
          
          set((state) => ({
            products: [...state.products, newProduct],
            myproducts: [...state.myproducts, newProduct],
          }));
        } catch (error) {
          console.error(error);
        }
      },

      removeProduct: async (id) => {
        try {
          const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
          });

          if (!response.ok) throw new Error("Failed to delete product");

          set((state) => ({
            products: state.products.filter((p) => p.id !== id),
            myproducts: state.myproducts.filter((p) => p.id !== id),
          }));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    {
      name: "product-store",
    }
  )
);