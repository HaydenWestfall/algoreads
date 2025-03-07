import { Product } from "./product";

export interface CartState {
  cartList: Product[];
  total: number;
}

// Define the possible action types for the reducer
export interface CartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
  payload: {
    products: Product[];
    total: number;
  };
}

export interface CartContextType {
  cartList: Product[];
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}
