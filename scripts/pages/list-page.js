function render() {
  // const { loginError } = LoginPage.state;
  return `
  <header class="lists-header">
  <img src="./assets/icons/organizable.svg">
</header>
<main class="list-main lime">
  <h1 class="list-heading">Organizable</h1>
  <section class="lists-container">
    <article class="list">
      <div class="list-header">
        <h3 class="list-title">To Do</h3>
        <div class="list-title__links">
          <img src="./assets/icons/edit.svg">
          <img src="./assets/icons/trash-icon.svg">
        </div>
      </div>
      <div class="list-content">
        <div class="card">
          <p>Add animations</p>
          <img src="./assets/icons/trash-icon.svg">
        </div>
        <div class="card">
          <p>Add animations</p>
          <img src="./assets/icons/trash-icon.svg">
        </div>
        <div class="card">
          <p>Refactor functions</p>
          <img src="./assets/icons/trash-icon.svg">
        </div>
        <div class="card">
          <p>Improve a11y</p>
          <img src="./assets/icons/trash-icon.svg">
        </div>
      </div>
      <form class="card-form">
        <input class="card-name" type="text" placeholder="new card">
        <img src="./assets/icons/plus.svg">
      </form>
    </article>
    <article class="list">
      <div class="list-header">
        <h3 class="list-title">To Do</h3>
        <div class="list-title__links">
          <img src="./assets/icons/edit.svg">
          <img src="./assets/icons/trash-icon.svg">
        </div>
      </div>
      <div class="list-content">
        <div class="card">
          <p>Add animations</p>
          <img src="./assets/icons/trash-icon.svg">
        </div>
        <div class="card">
          <p>Refactor functions</p>
          <img src="./assets/icons/trash-icon.svg">
        </div>
        <div class="card">
          <p>Improve a11y</p>
          <img src="./assets/icons/trash-icon.svg">
        </div>
      </div>
      <form class="card-form">
        <input class="card-name" type="text" placeholder="new card">
        <img src="./assets/icons/plus.svg">
      </form>
    </article>
    <div class="form-list__container">
      <form class="form-list__maker">
        <input class="input-list__maker list-name" type="text" placeholder="new list">
        <img class="new-list-button" src="./assets/icons/plus.svg">
      </form>
    </div>
  </section>
</main>`;
}


const ListPage = {
  toString() {
    return render();
  },
  addListeners() {
  },
  // state: {
  //   loginError: null,
  // },
};

export default ListPage;
