import DOMHandler from "../dom-handler.js";
import { logout } from "../services/sessions-service.js";
import { updateUser } from "../services/users-service.js";
import STORE from "../store.js";
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
     <form class="login-form" id="updateForm">
      <label class="label" for="username">USERNAME</label>
      <input class="input max-width" id="username" placeholder="placeholder" type="text" value="${JSON.parse(localStorage.getItem("user")).username}">
      <label class="label" for="email">EMAIL</label>
      <input class="input max-width" id="email" placeholder="placeholder" type="email" value="${JSON.parse(localStorage.getItem("user")).email}">
      <label class="label" for="fname">FIRST NAME</label>
      <input class="input max-width" id="fname" placeholder="placeholder" type="text" value="${JSON.parse(localStorage.getItem("user")).firstName}">
      <label class="label" for="lname">LAST NAME</label>
      <input class="input max-width" id="lname" placeholder="placeholder" type="text" value="${JSON.parse(localStorage.getItem("user")).lastName}">
      <button class="submit max-width bc-pink" id="updateProfile" type="submit">UPDATE PROFILE</button>
    </form>
    <a class="delete-acc max-width submit bc-gray vertical-center h-c" id="deleteAccButton" href="#">DELETE MY ACCOUNT</a>
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

function updateListener() {
  const form = document.querySelector("#updateForm");
  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const { username, email, fname, lname } = e.target;
    const credentials = {
      username: username.value,
      email: email.value,
      first_name: fname.value,
      last_name: lname.value,
    }
    const user = await updateUser(credentials);
    STORE.user = user;
    DOMHandler.reload();
  })
}

function deleteListener() {
  const deleteButton = document.querySelector("#deleteAccButton");
  deleteButton.addEventListener("click", async (e)=>{
    e.preventDefault();
    console.log("delete")
    DOMHandler.reload();
  })
}

const ProfilePage = {
  toString() {
    return render();
  },
  addListeners() {
    asideListeners();
    logoutListener();
    updateListener();
    deleteListener();
  },
  // state: {
  //   loginError: null,
  // },
};

export default ProfilePage;
