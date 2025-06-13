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
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        set({ products: data });
        set({ loading: false });
      },
      // Add product to the store
      addProduct: async (product) => {
        // Generate a new ID for the product
        const newId = Date.now();
        const newProduct = { ...product, id: newId };
        // Post the new product to the API (this is a mock API, so it won't actually save the product)
        await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }).catch((error) => {
          console.error("Error adding product:", error);
          throw new Error("Failed to add product");
        });
        // Update the store with the new product
        set((state) => ({
          products: [...state.products, newProduct],
          myproducts: [...state.myproducts, newProduct],
        }));
      },
      removeProduct: async (id) =>
        // Delete from API
        fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete product");
            }
            // If the product is successfully deleted, update the store
            set((state) => ({
              products: state.products.filter((product) => product.id !== id),
              myproducts: state.myproducts.filter(
                (product) => product.id !== id
              ),
            }));
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          }),
    }),
    {
      name: "product-store",
    }
  )
);
