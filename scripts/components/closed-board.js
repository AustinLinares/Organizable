import STORE from "../store.js";


function renderClosedBoard(closedBoard) {
  console.log(closedBoard);
  return `
  <article class="board ${closedBoard.color}" data-id="${closedBoard.id}" data-color="${closedBoard.color}">
    <p>${closedBoard.name}</p>
    <div class="board-footer">
      <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
      <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
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

const BoardsClosed = {
  toString() {
    return render();
  },
  addListeners() {
  },
};

export default BoardsClosed;

// `
// <section class="board-container">
//   <article class="board limon-bc">
//     <p>Board 1</p>
//     <div class="board-footer">
//       <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
//       <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
//     </div>
//   </article>
// </section>`