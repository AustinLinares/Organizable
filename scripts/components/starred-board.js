import STORE from "../store.js";

function renderStarredBoard(starredBoard) {
  return `
  <article class="board ${starredBoard.color}" data-id="${starredBoard.id}" data-color="${starredBoard.color}">
    <p>${starredBoard.name}</p>
    <div class="board-footer">
      <a class="board-link trash-svg" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
      <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/star-active-icon.svg"></a>
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

const StarredBoard = {
  toString() {
    return render();
  },
  addListeners() {
  },
};

export default StarredBoard;
