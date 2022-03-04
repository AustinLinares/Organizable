import STORE from "../store.js";

function renderRegularBoard(regularBoard) {
  console.log(regularBoard);
  return `
  <article class="board ${regularBoard.color}" data-id="${regularBoard.id}" data-color="${regularBoard.color}">
    <p>${regularBoard.name}</p>
    <div class="board-footer">
      <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
      <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/star-desactive-icon.svg"></a>
    </div>
  </article>
`;
}

function render() {
  let regularBoards = JSON.parse(localStorage.getItem("regular")) || STORE.regular;
  return `
  <section class="board-container">
    ${regularBoards.map(renderRegularBoard).join("")}
  </section>
  `;
}

const RegularBoard = {
  toString() {
    return render();
  },
  addListeners() {
  },
};

export default RegularBoard;
