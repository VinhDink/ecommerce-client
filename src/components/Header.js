import "../style/header.css";

const Header = () => {
  return (
    <header class="header">
      <div class="header__box">
        <h1 class="header__title">Wepaid</h1>
        <div class="header__search-box">
          <input type="text" class="header__search-bar"></input>
          <button class="header__search-button">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <div class="header__cart">
          <i class="bi bi-bag"></i>
        </div>
        <div>Login | Register</div>
      </div>
    </header>
  );
};

export default Header;
