import { Order } from "../models/order";
import { Product } from "../models/product";
import { User } from "../models/user";

function getSession(): { token: string | null; cbid: string | null } {
  const token = sessionStorage.getItem("token");
  const cbid = sessionStorage.getItem("cbid");

  return {
    token: token ? JSON.parse(token) : null,
    cbid: cbid ? JSON.parse(cbid) : null,
  };
}

export async function getUser(): Promise<User> {
  const browserData = getSession();
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
  };
  const response = await fetch(`${import.meta.env.VITE_APP_HOST}/600/users/${browserData.cbid}`, requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  return await response.json();
}

export async function getUserOrders(): Promise<Order[]> {
  const browserData = getSession();
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
  };
  const response = await fetch(
    `${import.meta.env.VITE_APP_HOST}/660/orders?user.id=${browserData.cbid}`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  return await response.json();
}

export async function createOrder(cartList: Product[], total: number, user: User): Promise<Order> {
  const browserData = getSession();
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
    body: JSON.stringify(order),
  };
  const response = await fetch(`${import.meta.env.VITE_APP_HOST}/660/orders`, requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  return await response.json();
}
