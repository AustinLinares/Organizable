import DOMHandler from "../dom-handler.js";
import { deleteBoard, editBoard } from "../services/board-service.js";
import STORE from "../store.js";

function renderClosedBoard(closedBoard) {
  return `
  <article class="board ${closedBoard.color}" data-id="${closedBoard.id}">
    <p>${closedBoard.name}</p>
    <div class="board-footer">
      <a class="board-link" id="recover-svg" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
      <a class="board-link" id="trash-svg" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
    </div>
  </article>
`;
}

function render() {
  let closedBoards = JSON.parse(localStorage.getItem("closed")) || STORE.closed;
  return `
  <section class="board-container">
    ${closedBoards.map(renderClosedBoard).join("")}
  </section>
  `;
}

function deleteListener() {
  let trashAnchors = document.querySelectorAll("#trash-svg");
  trashAnchors.forEach(anchor => {
    anchor.addEventListener("click", async (e) => {
      e.preventDefault();
      let idToDelete = e.target.closest("article").dataset.id;
      await deleteBoard(idToDelete);
      await STORE.fetchBoards();
      DOMHandler.reload();
    })
  });
}

function recoverListener() {
  let recoverAnchors = document.querySelectorAll("#recover-svg");
  recoverAnchors.forEach(anchor => {
    anchor.addEventListener("click", async (e) => {
      e.preventDefault();
      let idToUpdate = e.target.closest("article").dataset.id;
      await editBoard(idToUpdate, { closed: false});
      await STORE.fetchBoards();
      DOMHandler.reload();
    })
  });
}

const BoardsClosed = {
  toString() {
    return render();
  },
  addListeners() {
    deleteListener();
    recoverListener();
  },
};

export default BoardsClosed;
