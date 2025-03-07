import { Product } from "../models/product";

export async function getProductList(searchTerm: string | null): Promise<Product[]> {
  const response = await fetch(
    `${import.meta.env.VITE_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  return await response.json();
}

export async function getFeaturedList(): Promise<Product[]> {
  const response = await fetch(`${import.meta.env.VITE_APP_HOST}/444/featured_products`);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${import.meta.env.VITE_APP_HOST}/444/products/${id}`);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  return await response.json();
}
