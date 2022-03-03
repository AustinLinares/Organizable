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
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(
  data = { username, email, first_name, last_name, password }
) {
  const { token, ...user } = await apiFetch(`users/${JSON.parse(localStorage.getItem("user")).id}`, {
    body: data,
    method: "PATCH",
  });
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
// login({
// 	username: "poke4",
// 	password: "123456"
// }).then(updateUser({
//   username: "poke4",
//   email: "pokemon123@mail.com",
//   first_name: "poke",
//   last_name: "mon",
//   password: "123456",
// })).then(console.log);



