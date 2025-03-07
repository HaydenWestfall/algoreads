import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useTitle } from "../../hooks/useTitle";
import { useCart } from "../../context/CartContext";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
