import STORE from "../store.js";

function Card(card) {
  console.log(card);
  return `
  <div class="card" data-id="${card.cardId}">
    <p>${card.name}</p>
    <img src="./assets/icons/trash-icon.svg">
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
  console.log(list);
  return `
  <article class="list" data-id="${list.listId}">
    <div class="list-header">
      <h3 class="list-title">${list.name}</h3>
      <div class="list-title__links">
        <img src="./assets/icons/edit.svg">
        <img src="./assets/icons/trash-icon.svg">
      </div>
    </div>
    <div class="list-content">
      ${renderCards(list)}
    </div>
    <form class="card-form">
      <input class="card-name" type="text" placeholder="new card">
      <img src="./assets/icons/plus.svg">
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


const ListsComponent = {
  toString() {
    return render();
  },
  addListeners() {

  },
};

export default ListsComponent;
