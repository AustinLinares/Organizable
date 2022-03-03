import apiFetch from "./api-fetch.js";
import { login } from "./sessions-service.js";

export async function createList( idBoard, newList = { name }) {
  return await apiFetch("boards/" + idBoard + "/lists", {body: newList });
};

export async function deleteList(idBoard, idList) {
  return await apiFetch("boards/" + idBoard + "/lists/" + idList, {method: "DELETE" });
};


export async function editList(idBoard, idList, newList = { name }) {
  return await apiFetch("boards/" + idBoard + "/lists/" + idList, {method: "PATCH", body: newList});
};

export async function sortList(id, newContact = { name, color, starred, closed }) {
  return await apiFetch("boards/" + id, {method: "PATCH", body: newContact});
};


// test createList
// async function testCreateList() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   createList(383, {
//     name: "created from vscode",
//   }).then(console.log)
// }
// testCreateList();

// test deleteList
// async function testDeleteList() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   deleteList(383, 129).then(console.log)
// }
// testDeleteList();

// test editList
// async function testEditList() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   editList(383, 128, {
//     name: "editend from VSCODE"
//   }).then(console.log)
// }
// testEditList();



