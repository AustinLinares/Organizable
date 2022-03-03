import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function login(credentials = { email, password }) {
  const { token, ...user } = await apiFetch("login", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "DELETE" });
  sessionStorage.removeItem(tokenKey);
  // localStorage.removeItem("contacts");
  // localStorage.removeItem("favorites");
  // localStorage.removeItem("STORE");
}

// test
// const user = login({
// 	email: "team4-austin@mail.com",
// 	password: "123456"
// })//.then(logout);
