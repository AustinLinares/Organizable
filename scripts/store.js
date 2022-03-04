import { getBoards } from "./services/board-service.js";


async function fetchBoards() {
  let boards = await getBoards();
  this.starred = boards.filter(
    (board) => board.starred
  );
  this.closed = boards.filter(
    (board) => board.closed
  );
  this.regular = boards.filter(
    (board) => !(board.starred) && !(board.closed)
  );
  localStorage.setItem("starred", JSON.stringify(this.starred));
  localStorage.setItem("closed", JSON.stringify(this.closed));
  localStorage.setItem("regular", JSON.stringify(this.regular));
}

// function currentCategories() {
//   return this[this.currentTab];
// }

// function deleteCategory(id) {
//   if (this.currentTab == "expense")
//     this.expense = this.expense.filter((cat) => cat.id != id);

//   if (this.currentTab == "income")
//     this.income = this.income.filter((cat) => cat.id != id);
// }

const STORE = {
  user: null,
  starred: [],
  regular: [],
  closed: [],
  currentTab: "expense",
  fetchBoards,
  // currentCategories,
  // deleteCategory,
};

export default STORE;
