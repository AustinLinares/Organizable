import RegularBoard from "../components/regular-board.js";
import StarredBoard from "../components/starred-board.js";
import DOMHandler from "../dom-handler.js";
import { createBoard, editBoard, showBoard } from "../services/board-service.js";
import { logout } from "../services/sessions-service.js";
import STORE from "../store.js";
import ClosedPage from "./closed-boards-page.js";
import ListPage from "./list-page.js";
import LoginPage from "./login-page.js";
import ProfilePage from "./profile-page.js";

function render() {
  // const { loginError } = LoginPage.state;
  return `
  <section class="biggest-container">
<aside class="aside">
  <header class="aside-header vertical-center pd-h">
    <img src="./assets/icons/organizable.svg" alt="logo">
  </header>
  <section class="aside-content">
    <div class="aside-div pd-h aside-active" id="myboards-div">
      <img class="svg" src="./assets/icons/logout-icon.svg" alt="logo">
      <p>My Boards</p>
    </div>
    <div class="aside-div pd-h" id="closedboards-div">
      <img class="svg" src="./assets/icons/closed-boards-icon.svg" alt="logo">
      <p> Closed Boards</p>
    </div>
    <div class="aside-div pd-h" id="myprofile-div">
      <img class="svg" src="./assets/icons/profile-icon.svg" alt="logo">
      <p>My Profile</p>
    </div>
  </section>
  <footer class="aside-footer pd-h vertical-center">
    <img class="svg" id="logout-img" src="./assets/icons/logout-icon.svg" alt="logo">
    <a class="anchor" id="logout-anchor" href="#">Log out</a>
  </footer>
</aside>
<main class="window home-container main-padding">
  <h1 class="heading profile-heading">My Boards</h1>
  <h2 class="heading heading-sm">Starred Boards</h2>
  ${StarredBoard}
  <h2 class="heading heading-sm">Boards</h2>
  ${RegularBoard}
</main>
<div class="hide-container ds-none">
    <div id="creationFormContainer" class="creation-container">
      <form id="formToCC" class="board lime" data-color="">
        <input class="special-input" id="toCreateBoards" placeholder="Board name" type="text">
        <div class="board-footer">
          <button class="special-button">CREATE</button>
        </div>
      </form>
      <section id="palette" class="palette">
        <div class="color-p lime"></div>
        <div class="color-p red"></div>
        <div class="color-p blue"></div>
        <div class="color-p orange"></div>
        <div class="color-p purple"></div>
        <div class="color-p pink"></div>
        <div class="color-p green"></div>
        <div class="color-p grey"></div>
        <div class="color-p sky"></div>
        <img class="escape" src="../../assets/icons/x.svg">
      </section>
    </div>
  </div>
</section>`;
}

function logoutListener() {
  const logoutImg = document.querySelector("#logout-img");
  const logoutAnchor = document.querySelector("#logout-anchor");
  logoutImg.addEventListener("click", async ()=>{
    await logout();
    DOMHandler.load(LoginPage);
  })
  logoutAnchor.addEventListener("click", async ()=>{
    await logout();
    DOMHandler.load(LoginPage);
  })
}

function asideListeners() {
  const closedDiv = document.querySelector("#closedboards-div");
  const profileDiv = document.querySelector("#myprofile-div");
  closedDiv.addEventListener("click", ()=>{
    DOMHandler.load(ClosedPage);
  })
  profileDiv.addEventListener("click", ()=>{
    DOMHandler.load(ProfilePage);
  })
}

function trashListener() {
  let trashAnchors = document.querySelectorAll(".trash-svg");
  trashAnchors.forEach(anchor => {
    anchor.addEventListener("click", async (e) => {
      e.preventDefault();
      let idToDelete = e.target.closest("article").dataset.id;
      await editBoard(idToDelete, { closed: true, starred: false });
      await STORE.fetchBoards();
      DOMHandler.reload();
    })
  });
}

function colorSelectorListener() {
  const formToCC = document.querySelector("#formToCC");
  const colors = document.querySelectorAll(".color-p");
  colors.forEach((color) => {
    color.addEventListener("click", (e) =>{
      formToCC.classList.remove(`${formToCC.classList[1]}`);
      formToCC.classList.add(`${e.target.classList[1]}`);
    })
  })
}

function createBoardListener() {
  const formContainer = document.querySelector(".hide-container");
  const formToCreate = document.querySelector("#formToCC");
  formToCreate.addEventListener("submit", async (e) => {
    e.preventDefault();
    const credentials = {
      name: toCreateBoards.value,
      color: formToCC.classList[1],
    };
    console.log(credentials);
    await createBoard(credentials);
    await STORE.fetchBoards();
    formContainer.classList.toggle("ds-none");
    DOMHandler.reload();
  })
}

function closeForm() {
  const esc = document.querySelector(".escape");
  const formContainer = document.querySelector(".hide-container");
  esc.addEventListener("click", () => {
    formContainer.classList.toggle("ds-none");
  })
}

function listPageListener() {
  let boards = document.querySelectorAll(".board-list");
  boards.forEach((board) => {
    board.addEventListener("click", async (event) => {
      if (event.target.tagName == "A" || event.target.tagName == "IMG") return;
      let idToGet = event.target.closest("article").dataset.id;
      let chosenBoard;
      if (!(localStorage.getItem(`${idToGet}`))) {
        chosenBoard = await showBoard(idToGet); 
        localStorage.setItem(`${idToGet}`, JSON.stringify(chosenBoard));
        STORE.currentBoard= chosenBoard;
      } else {
        STORE.currentBoard= JSON.parse((localStorage.getItem(`${idToGet}`)));
      }
      DOMHandler.load(ListPage);
    })
  })
}

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    logoutListener();
    asideListeners();
    trashListener();
    colorSelectorListener();
    createBoardListener();
    closeForm();
    listPageListener();
    RegularBoard.addListeners();
    StarredBoard.addListeners();
  },
  // state: {
  //   loginError: null,
  // },
};

export default HomePage;

