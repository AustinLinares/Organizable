import DOMHandler from "../dom-handler.js";
import { login } from "../services/sessions-service.js";
import STORE from "../store.js";

function render() {
  // const { loginError } = LoginPage.state;
  return `
  <section class="window main-container h-c">
  <img src="./assets/icons/organizable.svg" alt="logo">
  <h2 class="heading">Login</h2>
  <form class="login-form" id="login-form">
    <label class="label" for="username">USERNAME</label>
    <input class="input" id="username" placeholder="placeholder" type="text">
    <label class="label" for="password">PASSWORD</label>
    <input class="input" id="password" placeholder="placeholder" type="password">
    <button class="submit bc-gray" type="submit">LOGIN</button>
  </form>
  <a class="anchor" href="#" id="signup">Create Account</a>
  </section>`;
}

function loginListener() {
  const form = document.querySelector("#login-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { username, password } = event.target ;
    const credentials = {
      username: username.value,
      password: password.value,
    }
    const user = await login(credentials);
    STORE.user = user;
    await STORE.fetchBoards();
    // DOMHandler.load(HomePage);
  })
}

const LoginPage = {
  toString() {
    return render();
  },
  addListeners() {
    loginListener();
  },
  // state: {
  //   loginError: null,
  // },
};

export default LoginPage;

