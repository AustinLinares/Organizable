import apiFetch from "./api-fetch.js";
import { login } from "./sessions-service.js";

export async function getBoards() {
  return await apiFetch("boards");
};

export async function showBoard(id) {
  return await apiFetch("boards/" + id);
};

export async function createBoard( newBoard = { name, color }) {
  return await apiFetch("boards", {body: newBoard });
};

export async function deleteBoard(id) {
  return await apiFetch("boards/" + id, {method: "DELETE" });
};


export async function editBoard(id, newContact = { name, color, starred, closed }) {
  return await apiFetch("boards/" + id, {method: "PATCH", body: newContact});
};

// // test getBoards
// const user = login({
// 	username: "user24",
// 	password: "123456"
// }).then(getBoards).then(console.log)//.then(logout);

// test createBoard
// async function testCreateBoard() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   createBoard({
//     name: "created from test",
//     color: "red",
//   }).then(console.log)
// }
// testCreateBoard();

// test createBoard
// async function testDeleteBoard() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   deleteBoard(385).then(console.log)
// }
// testDeleteBoard();

// test updateBoard
// async function testUpdateBoard() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   editBoard(383, {
//     name: "created from test2",
//     color: "red",
//     starred: true,
//   }).then(console.log)
// }
// testUpdateBoard();

// test updateBoard
// async function testGetBoard() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   showBoard(383).then(console.log)
// }
// testGetBoard();


