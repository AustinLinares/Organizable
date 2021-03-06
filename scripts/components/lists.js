import DOMHandler from "../dom-handler.js";
import { showBoard } from "../services/board-service.js";
import { createCard, deleteCard } from "../services/card-service.js";
import { createList, deleteList, editList } from "../services/list-service.js";
import STORE from "../store.js";

function Card(card) {
  // console.log(card);
  return `
  <div class="card" data-id="${card.cardId}">
    <p>${card.name}</p>
    <img class="trash-card" src="./assets/icons/trash-icon.svg">
  </div>
`;
}

function renderCards(chosenList) {
  let cards = chosenList.cards;
  return `
  <div class="list-content">
    ${cards.map(Card).join("")}

  </div>
  `;
}

function renderLists(list) {
  // console.log(list);
  return `
  <article class="list" data-id="${list.listId}">
    <div class="list-header">
      <div class="displayed-header">
        <h3 class="list-title">${list.name}</h3>
        <div class="list-title__links">
          <img class="edit-list" src="./assets/icons/edit.svg">
          <img class="trash-list" src="./assets/icons/trash-icon.svg">
        </div>
      </div>
      <form class="list-edit-form ds-none">
        <input class="list-edit-name" type="text" placeholder="Editing mode">
        <div class="list-edit-links">
          <img class="send-edits" src="../../assets/icons/check.svg">
          <img class="escape-edit" src="../../assets/icons/escape-list.svg">
        </div>
      </form>
    </div>
    <div class="list-content">
      ${renderCards(list)}
    </div>
    <form class="card-form">
      <input class="card-name" type="text" placeholder="new card">
      <img class="new-card-button" src="./assets/icons/plus.svg">
    </form>
  </article>
`;
}

function render() {
  let lists = STORE.currentBoard.lists;
  return `
  <section class="lists-container">
    ${lists.map(renderLists).join("")}
    <div class="form-list__container">
      <form class="form-list__maker">
        <input class="input-list__maker list-name" type="text" placeholder="new list">
        <img class="new-list-button" src="./assets/icons/plus.svg">
      </form>
    </div>
  </section>
  `;
}

function listCreationListener() {
  const buttonCreator = document.querySelector(".new-list-button");
  let inputToSend = document.querySelector(".input-list__maker"); 
  buttonCreator.addEventListener("click", async (e) => {
    const credentials = {
      name: inputToSend.value,
    }
    await createList(STORE.currentBoard.id, credentials);
    STORE.currentBoard = await showBoard(STORE.currentBoard.id);
    localStorage.setItem(`${STORE.currentBoard.id}`, JSON.stringify(STORE.currentBoard));
    DOMHandler.reload();
  })
}

function listDeleteListener() {
  let trashListAnchors = document.querySelectorAll(".trash-list");
  trashListAnchors.forEach((anchor) => {
    anchor.addEventListener("click", async (e) => {
      await deleteList(STORE.currentBoard.id , e.target.closest("article").dataset.id);
      STORE.currentBoard = await showBoard(STORE.currentBoard.id);
      localStorage.setItem(`${STORE.currentBoard.id}`, JSON.stringify(STORE.currentBoard));
      DOMHandler.reload();
    })
  })
}

function cardCreationListener() {
  let buttonCreators = document.querySelectorAll(".new-card-button");
  buttonCreators.forEach((button) => {
    button.addEventListener("click", async (e) => {
      let listParent= e.target.closest("article");
      const credentials = {
        name: listParent.querySelector(".card-name").value,
      }
      await createCard(listParent.dataset.id, credentials);
      STORE.currentBoard = await showBoard(STORE.currentBoard.id);
      localStorage.setItem(`${STORE.currentBoard.id}`, JSON.stringify(STORE.currentBoard));
      DOMHandler.reload();
    })
  })
}

function cardDeleteListener() {
  let trashCardAnchors = document.querySelectorAll(".trash-card");
  trashCardAnchors.forEach((anchor) => {
    anchor.addEventListener("click", async (e) => {
      await deleteCard(e.target.closest("article").dataset.id, e.target.closest(".card").dataset.id);
      STORE.currentBoard = await showBoard(STORE.currentBoard.id);
      localStorage.setItem(`${STORE.currentBoard.id}`, JSON.stringify(STORE.currentBoard));
      DOMHandler.reload();
    })
  })
}

function openListEditListener() {
  let editListAnchors = document.querySelectorAll(".edit-list");
  editListAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      let listToEdit = e.target.closest("article");
      listToEdit.querySelector(".list-edit-form").classList.toggle("ds-none");
      e.target.closest(".displayed-header").classList.toggle("ds-none");
    })
  })
}

function closeListEditListener() {
  let closeEditListAnchors = document.querySelectorAll(".escape-edit");
  closeEditListAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      DOMHandler.reload();
    })
  })
}

function sendEditListener() {
  let sendEditListAnchors = document.querySelectorAll(".send-edits");
  sendEditListAnchors.forEach((anchor) => {
    anchor.addEventListener("click", async (e) => {
      let listToSendEdit= e.target.closest("article");
      const credentials = {
        name: listToSendEdit.querySelector(".list-edit-name").value,
      }
      console.log(STORE.currentBoard.id);
      console.log(listToSendEdit.dataset.id);
      await editList(STORE.currentBoard.id, listToSendEdit.dataset.id, credentials);
      STORE.currentBoard = await showBoard(STORE.currentBoard.id);
      localStorage.setItem(`${STORE.currentBoard.id}`, JSON.stringify(STORE.currentBoard));
      DOMHandler.reload();
    })
  })
}

const ListsComponent = {
  toString() {
    return render();
  },
  addListeners() {
    listCreationListener();
    listDeleteListener();
    cardCreationListener();
    cardDeleteListener();
    openListEditListener();
    closeListEditListener();
    sendEditListener();
  },
};

export default ListsComponent;
