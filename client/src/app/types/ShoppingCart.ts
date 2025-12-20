import { Product } from "./Products";

// CART ITEM TYPES
export type CartItem = {
    id: number;
    productId: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export type CartState = {
    // state types
    cart: CartItem[];
    isOpen: boolean;
    isLoading: boolean;
    error: string | null;
    // actions types
    setIsOpen: (isOpen: boolean) => void;
    //async types
    fetchCart: () => Promise<void>
    addToCart: (product: Product) => Promise<void>
    removeFromCart: (cartId: number) => Promise<void>
    clearCart: () => Promise<void>;
}