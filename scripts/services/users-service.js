import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";
import { login } from "./sessions-service.js";

export async function getUser() {
  const { token, ...user } = await apiFetch(`users/${JSON.parse(localStorage.getItem("user")).id}`);
  return user; 
}

export async function createUser(
  newUser = { username, email, first_name, last_name, password }
) {
  const { token, ...user } = await apiFetch("users", { body: newUser });
  localStorage.setItem("user", JSON.stringify(user));
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(
  data = { username, email, first_name, last_name }
) {
  const { token, ...user } = await apiFetch(`users/${JSON.parse(localStorage.getItem("user")).id}`, {
    body: data,
    method: "PATCH",
  });
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

export async function deleteUser() {
  const { token, ...user } = await apiFetch(`users/${JSON.parse(localStorage.getItem("user")).id}`, { method: "DELETE"});
  return user; 
}

//test getUser
// const user = login({
// 	username: "user24",
// 	password: "123456"
// }).then(getUser).then(console.log);

//test createUser
// createUser({
//   username: "poke4",
//   email: "pokemon123@mail.com",
//   first_name: "poke",
//   last_name: "mon",
//   password: "123456",
// }).then(console.log);

// test updateUser
// async function testUpdateUser() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   updateUser({
//   username: "poke4",
//   email: "pokemon123@mail.com",
//   first_name: "poke",
//   last_name: "mon",
// }).then(console.log)
// }
// testUpdateUser();