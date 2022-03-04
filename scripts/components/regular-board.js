import DOMHandler from "../dom-handler.js";
import { editBoard } from "../services/board-service.js";
import STORE from "../store.js";

function renderRegularBoard(regularBoard) {
  return `
  <article class="board ${regularBoard.color}" data-id="${regularBoard.id}" data-color="${regularBoard.color}">
    <p>${regularBoard.name}</p>
    <div class="board-footer">
      <a class="board-link trash-svg" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
      <a class="board-link star-desactive" href="#"><img class="board-footer__img" src="./assets/icons/star-desactive-icon.svg"></a>
    </div>
  </article>
`;
}

function render() {
  let regularBoards = JSON.parse(localStorage.getItem("regular")) || STORE.regular;
  return `
  <section class="board-container">
    ${regularBoards.map(renderRegularBoard).join("")}
    <article class="board-creater vertical-center h-c">
      <p class="vertical-center">Create Board</p>
    </article>
  </section>
  `;
}

function createBoardListener() {
  const boardCreater = document.querySelector(".board-creater");
  boardCreater.addEventListener("click", () => {
    console.log("created");
  })
}

function starListener() {
  let stars = document.querySelectorAll(".star-desactive");
  stars.forEach((star) => {
    star.addEventListener("click", async (e) => {
      e.preventDefault();
      let idToStar = e.target.closest("article").dataset.id;
      await editBoard(idToStar, { starred: true });
      await STORE.fetchBoards();
      DOMHandler.reload();
    })
  })
}

const RegularBoard = {
  toString() {
    return render();
  },
  addListeners() {
    createBoardListener();
    starListener();
  },
};

export default RegularBoard;
