import "../style/header.css";
import "../style/common.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "../config";
import { ShopContext } from "../context/shop-context";

const Header = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const { searchProduct } = useContext(ShopContext);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = axios.post("/search", { search: inputValue });
  };

  return (
    <header class="header">
      <div class="header__box">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className={location.pathname === "/" ? "active-link" : ""}
        >
          <h1 class="header__title">Wepaid</h1>
        </Link>
        <div class="header__search-box">
          <input
            type="text"
            class="header__search-bar"
            name="search"
            value={inputValue}
            onChange={handleInputChange}
          ></input>
          <button
            class="header__search-button"
            onClick={() => {
              searchProduct(inputValue);
            }}
          >
            <i class="bi bi-search"></i>
          </button>
        </div>
        <Link
          to="/cart"
          style={{ textDecoration: "none" }}
          id="cartlink"
          className={location.pathname === "/cart" ? "active-link" : ""}
        >
          <div class="header__cart">
            <i class="bi bi-bag"></i>
          </div>
        </Link>
        <div>
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>{" "}
          |
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </div>
        <div className="links">
          <Link
            to="/browsing"
            style={{ textDecoration: "none" }}
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Shop
          </Link>
        </div>
        <div className="links">
          <button class="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
