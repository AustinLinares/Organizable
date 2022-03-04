import { tokenKey } from "./config.js";
import DOMHandler from "./dom-handler.js";
import HomePage from "./pages/home-page.js";
import LoginPage from "./pages/login-page.js";

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    if (!token) throw new Error();
    // const user = await getUser();
    // STORE.user = user;
    // await STORE.getContacts();
    DOMHandler.load(HomePage);
  } catch (error) {
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(LoginPage);
  }
}

init();