import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function login(credentials = { username, password }) {
  const { token, ...user } = await apiFetch("login", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "POST" });
  sessionStorage.removeItem(tokenKey);
  // localStorage.removeItem("contacts");
  // localStorage.removeItem("favorites");
  // localStorage.removeItem("STORE");
}

// test login
// const user = login({
// 	username: "user24",
// 	password: "123456"
// }).then(console.log)//.then(logout);

// test logout
// logout();
