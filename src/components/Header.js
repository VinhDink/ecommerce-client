import "../style/header.css";
import "../style/common.css";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation();

  return (
    <header class="header">
      <div class="header__box">
        <Link to="/" style={{ textDecoration: 'none' }} className={location.pathname === "/" ? "active-link" : ""}>
          <h1 class="header__title">Wepaid</h1>
        </Link>
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
        <div className="links">
          <Link to="/browsing" style={{ textDecoration: 'none' }} className={location.pathname === "/" ? "active-link" : ""}>
            Shop
          </Link>

          <Link to="/cart" style={{ textDecoration: 'none' }} id="cartlink" className={location.pathname === "/cart" ? "active-link" : ""}>
            Cart
          </Link>
      </div>
      </div>
    </header>
  );
};

export default Header;
