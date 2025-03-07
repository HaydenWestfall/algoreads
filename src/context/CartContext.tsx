import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartContextType, CartState } from "../models/cart";
import { Product } from "../models/product";
import { cartReducer } from "../reducers/cartReducers";

const cartInitialState: CartState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(product: Product) {
    const updatedList = state.cartList.concat(product);
    const updatedTotal = state.total + product.price;
    dispatch({ type: "ADD_TO_CART", payload: { products: updatedList, total: updatedTotal } });
  }

  function removeFromCart(product: Product) {
    const updatedList = state.cartList.filter((x) => x.id != product.id);
    const updatedTotal = state.total - product.price;
    dispatch({ type: "REMOVE_FROM_CART", payload: { products: updatedList, total: updatedTotal } });
  }

  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
