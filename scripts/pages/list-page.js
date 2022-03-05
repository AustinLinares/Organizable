import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import HomePage from "./home-page.js";
import ListsComponent from "../components/lists.js";


function render() {
  // const { loginError } = LoginPage.state;
  let listToRender = STORE.currentBoard;
  console.log(listToRender);
  return `
<header class="lists-header">
  <img class="logo-list-page" src="./assets/icons/organizable.svg">
</header>
<main class="list-main ${listToRender.color}">
  <h1 class="list-heading">${listToRender.name}</h1>
  ${ListsComponent}
</main>`;
}

function logoListener() {
  const logo = document.querySelector(".logo-list-page");
  logo.addEventListener("click", () => {
    DOMHandler.load(HomePage);
  })
}

const ListPage = {
  toString() {
    return render();
  },
  addListeners() {
    logoListener();
    ListsComponent.addListeners();
  },
  // state: {
  //   loginError: null,
  // },
};

export default ListPage;
