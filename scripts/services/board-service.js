import apiFetch from "./api-fetch.js";
import { login } from "./sessions-service.js";

export async function getBoards() {
  return await apiFetch("boards");
};

export async function createBoard( newBoard = { name, color }) {
  return await apiFetch("boards", {body: newBoard });
};

export async function deleteBoard(id) {
  return await apiFetch("boards/" + id, {method: "DELETE" });
};

export async function editNoard(id, newContact = { name, color, starred, closed }) {
  return await apiFetch("boards/" + id, {method: "PATCH", body: newContact});
};

// // test getBoards
// const user = login({
// 	username: "user24",
// 	password: "123456"
// }).then(getBoards).then(console.log)//.then(logout);

// test createBoard
// const user = login({
// 	username: "user24",
// 	password: "123456"
// }).then(createBoard({
//   name: "created from test",
//   color: "red",
// })).then(console.log)//.then(logout);