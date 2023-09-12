import "../style/header.css";
import "../style/common.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "../config";

const Header = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const response = axios.post("/search", {search: inputValue});
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
          <button class="header__search-button" onClick={handleSubmit}>
            <i class="bi bi-search"></i>
          </button>
        </div>
        <div class="header__cart">
          <i class="bi bi-bag"></i>
        </div>
        <div>
          <Link to="/seller-login"
          style={{ textDecoration: "none" }}>Login</Link> | 
          <Link to="/seller-register"
          style={{ textDecoration: "none" }}>Register</Link></div>
        <div className="links">
          <Link
            to="/browsing"
            style={{ textDecoration: "none" }}
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Shop
          </Link>

          <Link
            to="/cart"
            style={{ textDecoration: "none" }}
            id="cartlink"
            className={location.pathname === "/cart" ? "active-link" : ""}
          >
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
