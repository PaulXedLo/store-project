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
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();
          set({
            products: data,
            loading: false,
          });
          // HANDLE error
        } catch (error) {
          console.error("Error fetching products:", error);
          set({ loading: false });
          throw new Error("Failed to fetch products");
        }
      },
      // Add product to the store
      addProduct: async (product) => {
        // Generate a new ID for the product
        try {
          const newId = Date.now();
          const newProduct = { ...product, id: newId };
          // Post the new product to the API (this is a mock API, so it won't actually save the product)
          const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
          });
          if (!response.ok) {
            throw new Error("Failed to add product");
          }
          set((state) => ({
            products: [...state.products, newProduct],
            myproducts: [...state.myproducts, newProduct],
          }));
          // handle error
        } catch (error) {
          console.error("Error in addProduct:", error);
          throw new Error("Failed to add product");
        }
      },
      removeProduct: async (id) => {
        // Delete from API
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
            {
              method: "DELETE",
            }
          );
          if (!response.ok) {
            console.error("Error removing product:", response.statusText);
            throw new Error("Failed to remove product");
          }
          // update after deleting
          set((state) => ({
            products: state.products.filter((product) => product.id !== id),
            myproducts: state.myproducts.filter((product) => product.id !== id),
          }));
          // handle error
        } catch (error) {
          console.error("Error in removeProduct:", error);
          throw new Error("Failed to remove product");
        }
      },
    }),

    {
      name: "product-store",
    }
  )
);
