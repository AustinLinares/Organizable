import RegularBoard from "../components/regular-board.js";
import StarredBoard from "../components/starred-board.js";
import DOMHandler from "../dom-handler.js";
import { editBoard } from "../services/board-service.js";
import { logout } from "../services/sessions-service.js";
import STORE from "../store.js";
import ClosedPage from "./closed-boards-page.js";
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

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    logoutListener();
    asideListeners();
    trashListener();
    RegularBoard.addListeners();
    StarredBoard.addListeners();
  },
  // state: {
  //   loginError: null,
  // },
};

export default HomePage;

