import { create } from 'zustand'
import { CartState } from '../types/ShoppingCart'

const BASE_URL = "http://localhost:5198/api/cart"

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    isLoading: false,
    isOpen: false,
    error: null,

    setIsOpen: (isOpen) => set({ isOpen }),
    // fetch cart
    fetchCart: async () => {
        set({ isLoading: true });
        try {
            const res = await fetch(BASE_URL);
            const data = await res.json();
            set({ cart: data, error: null });
        } catch (error) {
            console.error("error fetching cart products", error)
            set({ error: "Failed to fetch cart" });
        } finally {
            set({ isLoading: false })
        }
    },
    // POST
    addToCart: async (product) => {
        try {
            await fetch(BASE_URL, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    productId: product.id,
                    quantity: 1
                })
            })
            get().fetchCart();
        } catch (error) {
            console.error("Failed to add to cart", error)
        }
    },
    // DELETE
    removeFromCart: async (cartId) => {
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== cartId),
        }));

        try {
            await fetch(`${BASE_URL}/${cartId}`, {
                method: "DELETE"
            });
        } catch (error) {
            console.error("Failed to remove from cart", error);
            get().fetchCart();
        }
    },

    clearCart: async () => {
        set({ cart: [] });
    }
}))