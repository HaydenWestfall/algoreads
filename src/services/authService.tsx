import { LoginResponse } from "../models/loginResponse";

export async function login(authDetail: any): Promise<LoginResponse> {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch(`${import.meta.env.VITE_APP_HOST}/login`, requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
}

export async function register(authDetail: any): Promise<LoginResponse> {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch(`${import.meta.env.VITE_APP_HOST}/register`, requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
