import DOMHandler from "../dom-handler.js";
import LoginPage from "./login-page.js";
import { createUser } from "../services/users-service.js";
import STORE from "../store.js";
import HomePage from "./home-page.js";

function render() {
  // const { loginError } = LoginPage.state;
  return `
  <section class="window main-container h-c">
<img src="./assets/icons/organizable.svg" alt="logo">
<h2 class="heading">Create Account</h2>
<form class="login-form" id="signup-form">
  <label class="label" for="username">USERNAME</label>
  <input class="input" id="username" placeholder="placeholder" type="text">
  <label class="label" for="email">EMAIL</label>
  <input class="input" id="email" placeholder="placeholder" type="email">
  <label class="label" for="fname">FIRST NAME</label>
  <input class="input" id="fname" placeholder="placeholder" type="text">
  <label class="label" for="lname">LAST NAME</label>
  <input class="input" id="lname" placeholder="placeholder" type="text">
  <label class="label" for="password">PASSWORD</label>
  <input class="input" id="password" placeholder="placeholder" type="password">
  <button class="submit bc-gray" type="submit">CREATE ACCOUNT</button>
</form>
<a class="anchor" href="#" id="login">Login</a>
</section>`;
}

function signupListener() {
  const form = document.querySelector("#signup-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { username, email, fname, lname, password } = event.target ;
    const credentials = {
      username: username.value,
      email: email.value,
      first_name: fname.value,
      last_name: lname.value,
      password: password.value,
    }
    console.log(credentials);
    const user = await createUser(credentials)
    STORE.user = user;
    await STORE.fetchBoards();
    DOMHandler.load(HomePage);
  })
}

function logInLoader() {
  const anchor = document.querySelector("#login");
  anchor.addEventListener("click", async (event) => {
    event.preventDefault();
    DOMHandler.load(LoginPage);
  })
}

const SignupPage = {
  toString() {
    return render();
  },
  addListeners() {
    logInLoader();
    signupListener();
  },
  // state: {
  //   loginError: null,
  // },
};

export default SignupPage;

// `<section class="window main-container h-c">
// <img src="./assets/icons/organizable.svg" alt="logo">
// <h2 class="heading">Create Account</h2>
// <form class="login-form">
//   <label class="label" for="username">USERNAME</label>
//   <input class="input" id="username" placeholder="placeholder" type="text">
//   <label class="label" for="email">EMAIL</label>
//   <input class="input" id="email" placeholder="placeholder" type="password">
//   <label class="label" for="fname">FIRST NAME</label>
//   <input class="input" id="fname" placeholder="placeholder" type="password">
//   <label class="label" for="lname">LAST NAME</label>
//   <input class="input" id="lname" placeholder="placeholder" type="password">
//   <label class="label" for="password">PASSWORD</label>
//   <input class="input" id="password" placeholder="placeholder" type="password">
//   <button class="submit bc-gray" type="submit">CREATE ACCOUNT</button>
// </form>
// <a class="anchor" href="#">Login</a>
// </section>`