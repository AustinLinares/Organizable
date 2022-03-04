import DOMHandler from "../dom-handler.js";
import { logout } from "../services/sessions-service.js";
import HomePage from "./home-page.js";
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
        <section class="aside-content ">
          <div class="aside-div pd-h" id="myboards-div">
            <img class="svg" src="./assets/icons/logout-icon.svg" alt="logo">
            <p>My Boards</p>
          </div>
          <div class="aside-div pd-h aside-active" id="closedboards-div">
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
        <h1 class="heading profile-heading">Closed Boards</h1>
        <section class="board-container">
          <article class="board limon-bc">
            <p>Board 1</p>
            <div class="board-footer">
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
            </div>
          </article>
          <article class="board limon-bc">
            <p>Board 1</p>
            <div class="board-footer">
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
            </div>
          </article>
          <article class="board limon-bc">
            <p>Board 1</p>
            <div class="board-footer">
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
            </div>
          </article>
          <article class="board limon-bc">
            <p>Board 1</p>
            <div class="board-footer">
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
            </div>
          </article>
          <article class="board limon-bc">
            <p>Board 1</p>
            <div class="board-footer">
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
            </div>
          </article>
          <article class="board limon-bc">
            <p>Board 1</p>
            <div class="board-footer">
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
            </div>
          </article>
          <article class="board limon-bc">
            <p>Board 1</p>
            <div class="board-footer">
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
            </div>
          </article>
          <article class="board limon-bc">
            <p>Board 1</p>
            <div class="board-footer">
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
              <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
            </div>
          </article>
        </section>
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
  logoutAnchor.addEventListener("click", async (e)=>{
    // e.preventDefault();
    await logout();
    DOMHandler.load(LoginPage);
  })
}

function asideListeners() {
  const boardsDiv = document.querySelector("#myboards-div");
  const profileDiv = document.querySelector("#myprofile-div");
  boardsDiv.addEventListener("click", ()=>{
    DOMHandler.load(HomePage);
  })
  profileDiv.addEventListener("click", (e)=>{
    DOMHandler.load(ProfilePage);
  })
}

const ClosedPage = {
  toString() {
    return render();
  },
  addListeners() {
    asideListeners();
    logoutListener();
  },
  // state: {
  //   loginError: null,
  // },
};

export default ClosedPage;

// `
// <section class="biggest-container">
//       <aside class="aside">
//         <header class="aside-header vertical-center pd-h">
//           <img src="./assets/icons/organizable.svg" alt="logo">
//         </header>
//         <section class="aside-content ">
//           <div class="aside-div pd-h">
//             <img class="svg" src="./assets/icons/logout-icon.svg" alt="logo">
//             <p>My Boards</p>
//           </div>
//           <div class="aside-div pd-h aside-active">
//             <img class="svg" src="./assets/icons/closed-boards-icon.svg" alt="logo">
//             <p> Closed Boards</p>
//           </div>
//           <div class="aside-div pd-h">
//             <img class="svg" src="./assets/icons/profile-icon.svg" alt="logo">
//             <p>My Profile</p>
//           </div>
//         </section>
//         <footer class="aside-footer pd-h vertical-center">
//           <img class="svg" src="./assets/icons/logout-icon.svg" alt="logo">
//           <a class="anchor" href="#">Log out</a>
//         </footer>
//       </aside>
//       <main class="window home-container main-padding">
//         <h1 class="heading profile-heading">Closed Boards</h1>
//         <section class="board-container">
//           <article class="board limon-bc">
//             <p>Board 1</p>
//             <div class="board-footer">
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
//             </div>
//           </article>
//           <article class="board limon-bc">
//             <p>Board 1</p>
//             <div class="board-footer">
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
//             </div>
//           </article>
//           <article class="board limon-bc">
//             <p>Board 1</p>
//             <div class="board-footer">
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
//             </div>
//           </article>
//           <article class="board limon-bc">
//             <p>Board 1</p>
//             <div class="board-footer">
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
//             </div>
//           </article>
//           <article class="board limon-bc">
//             <p>Board 1</p>
//             <div class="board-footer">
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
//             </div>
//           </article>
//           <article class="board limon-bc">
//             <p>Board 1</p>
//             <div class="board-footer">
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
//             </div>
//           </article>
//           <article class="board limon-bc">
//             <p>Board 1</p>
//             <div class="board-footer">
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
//             </div>
//           </article>
//           <article class="board limon-bc">
//             <p>Board 1</p>
//             <div class="board-footer">
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/recover-icon.svg"></a>
//               <a class="board-link" href="#"><img class="board-footer__img" src="./assets/icons/trash-icon.svg"></a>
//             </div>
//           </article>
//         </section>
//       </main>
//       </section>`