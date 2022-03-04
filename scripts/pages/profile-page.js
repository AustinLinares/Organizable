import DOMHandler from "../dom-handler.js";
import { logout } from "../services/sessions-service.js";
import ClosedPage from "./closed-boards-page.js";
import HomePage from "./home-page.js";
import LoginPage from "./login-page.js";

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
    <div class="aside-div pd-h" id="closedboards-div">
      <img class="svg" src="./assets/icons/closed-boards-icon.svg" alt="logo">
      <p> Closed Boards</p>
    </div>
    <div class="aside-div pd-h aside-active" id="myprofile-div">
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
  <h1 class="heading profile-heading">My Profile</h1>
  <section class="horazontal-center">
     <form class="login-form">
      <label class="label" for="username">USERNAME</label>
      <input class="input max-width" id="username" placeholder="placeholder" type="text">
      <label class="label" for="email">EMAIL</label>
      <input class="input max-width" id="email" placeholder="placeholder" type="password">
      <label class="label" for="fname">FIRST NAME</label>
      <input class="input max-width" id="fname" placeholder="placeholder" type="password">
      <label class="label" for="lname">LAST NAME</label>
      <input class="input max-width" id="lname" placeholder="placeholder" type="password">
      <button class="submit max-width bc-pink" type="submit">UPDATE PROFILE</button>
    </form>
    <a class="delete-acc max-width submit bc-gray vertical-center h-c" href="#">DELETE MY ACCOUNT</a>
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
  logoutAnchor.addEventListener("click", async ()=>{
    await logout();
    DOMHandler.load(LoginPage);
  })
}

function asideListeners() {
  const boardsDiv = document.querySelector("#myboards-div");
  const closedDiv = document.querySelector("#closedboards-div");
  boardsDiv.addEventListener("click", ()=>{
    DOMHandler.load(HomePage);
  })
  closedDiv.addEventListener("click", ()=>{
    DOMHandler.load(ClosedPage);
  })
}

const ProfilePage = {
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

export default ProfilePage;


// ` <section class="biggest-container">
// <aside class="aside">
//   <header class="aside-header vertical-center pd-h">
//     <img src="./assets/icons/organizable.svg" alt="logo">
//   </header>
//   <section class="aside-content ">
//     <div class="aside-div pd-h">
//       <img class="svg" src="./assets/icons/logout-icon.svg" alt="logo">
//       <p>My Boards</p>
//     </div>
//     <div class="aside-div pd-h">
//       <img class="svg" src="./assets/icons/closed-boards-icon.svg" alt="logo">
//       <p> Closed Boards</p>
//     </div>
//     <div class="aside-div pd-h aside-active">
//       <img class="svg" src="./assets/icons/profile-icon.svg" alt="logo">
//       <p>My Profile</p>
//     </div>
//   </section>
//   <footer class="aside-footer pd-h vertical-center">
//     <img class="svg" src="./assets/icons/logout-icon.svg" alt="logo">
//     <a class="anchor" href="#">Log out</a>
//   </footer>
// </aside>
// <main class="window home-container main-padding">
//   <h1 class="heading profile-heading">My Profile</h1>
//   <section class="horazontal-center">
//      <form class="login-form">
//       <label class="label" for="username">USERNAME</label>
//       <input class="input max-width" id="username" placeholder="placeholder" type="text">
//       <label class="label" for="email">EMAIL</label>
//       <input class="input max-width" id="email" placeholder="placeholder" type="password">
//       <label class="label" for="fname">FIRST NAME</label>
//       <input class="input max-width" id="fname" placeholder="placeholder" type="password">
//       <label class="label" for="lname">LAST NAME</label>
//       <input class="input max-width" id="lname" placeholder="placeholder" type="password">
//       <button class="submit max-width bc-pink" type="submit">UPDATE PROFILE</button>
//     </form>
//     <a class="delete-acc max-width submit bc-gray vertical-center h-c" href="#">DELETE MY ACCOUNT</a>
//   </section>
// </main>
// </section>`