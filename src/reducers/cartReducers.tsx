import { CartAction, CartState } from "../models/cart";

export const cartReducer = (state: CartState, action: CartAction) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products, total: payload.total };

    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products, total: payload.total };

    case "CLEAR_CART":
      return { ...state, cartList: payload.products, total: payload.total };

    default:
      throw new Error("No case found!");
  }
};
