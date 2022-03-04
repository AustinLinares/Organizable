import DOMHandler from "../dom-handler.js";
import { editBoard } from "../services/board-service.js";
import STORE from "../store.js";

function renderStarredBoard(starredBoard) {
  return `
  <article class="board ${starredBoard.color}" data-id="${starredBoard.id}" data-color="${starredBoard.color}">
    <p>${starredBoard.name}</p>
    <div class="board-footer">
      <a class="board-link trash-svg" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
      <a class="board-link star-active" href="#"><img class="board-footer__img" src="./assets/icons/star-active-icon.svg"></a>
    </div>
  </article>
`;
}

function render() {
  let starredBoards = JSON.parse(localStorage.getItem("starred")) || STORE.starred;
  return `
  <section class="board-container">
    ${starredBoards.map(renderStarredBoard).join("")}
  </section>
  `;
}

function unstarListener() {
  let stars = document.querySelectorAll(".star-active");
  stars.forEach((star) => {
    star.addEventListener("click", async (e) => {
      e.preventDefault();
      let idToUnstar = e.target.closest("article").dataset.id;
      await editBoard(idToUnstar, { starred: false });
      await STORE.fetchBoards();
      DOMHandler.reload();
    })
  })
}

const StarredBoard = {
  toString() {
    return render();
  },
  addListeners() {
    unstarListener();
  },
};

export default StarredBoard;
