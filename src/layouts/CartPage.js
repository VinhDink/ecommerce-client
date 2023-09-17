import React from "react";
import "../style/common.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { Cart } from "../pages/CartPage/cart";

const CartPage = () => {
  return (
    <div className="App">
      <Header />
      <div className="Cart-Page">
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
