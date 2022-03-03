import apiFetch from "./api-fetch.js";
import { login } from "./sessions-service.js";

export async function createCard( idList, newCard = { name }) {
  return await apiFetch("lists/" + idList + "/cards", {body: newCard });
};

export async function showCard(idList, idCard) {
  return await apiFetch("lists/" + idList + "/cards/" + idCard);
};

export async function editCard(idList, idCard, newCard = { name, list_id, pos }) {
  return await apiFetch("lists/" + idList + "/cards/" + idCard, {method: "PATCH", body: newCard});
};

export async function deleteCard(idList, idCard) {
  return await apiFetch("lists/" + idList + "/cards/" + idCard, {method: "DELETE"});
};

export async function sortCards() {
  return await apiFetch("boards");
};

// test createCard
// async function testCreateCard() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   createCard(128, {
//     name: "created from vscode",
//   }).then(console.log)
// }
// testCreateCard();

// test updateBoard
// async function testUpdateCard() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   editCard(128, 323, {
//     name: "edited from vscode",
//   }).then(console.log)
// }
// testUpdateCard();

// test showCard
// async function testShowCard() {
//   const user = await login({
//     username: "user24",
//     password: "123456"
//   })
//   showCard(128, 323).then(console.log)
// }
// testShowCard();

// test deleteCard
async function testDeleteCard() {
  const user = await login({
    username: "user24",
    password: "123456"
  })
  deleteCard(128, 322).then(console.log)
}
testDeleteCard();


