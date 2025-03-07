import { Product } from "./product";
import { User } from "./user";

export interface Order {
  id: number;
  user: User;
  cartList: Product[];
  amount_paid: number;
  quantity: number;
}
