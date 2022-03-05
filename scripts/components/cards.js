import STORE from "../store.js";

function renderCards(card) {
  console.log(card);
  return `
  <div class="card">
    <p>Add animations</p>
    <img src="./assets/icons/trash-icon.svg">
  </div>
`;
}

function render() {
  let cards = STORE.currentBoard.lists;
  return `
  <div class="list-content">
    ${cards.map(renderCards).join("")}
    <form class="card-form">
      <input class="card-name" type="text" placeholder="new card">
      <img src="./assets/icons/plus.svg">
    </form>
  </div>
  `;
}





const CardComponent = {
  toString() {
    return render();
  },
  addListeners() {

  },
};

export default CardComponent;
