import React, { useContext, useEffect, useLayoutEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../data/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "../../style/cart.css";
import { wait } from "@testing-library/user-event/dist/utils";
export const Cart = () => {
  const { userId, userCartInfo, getUser, fetchUserCartItem } = useContext(ShopContext)

  useEffect(() => {
    getUser();
    fetchUserCartItem(userId);
  },[userId])

  const { cartOwrner, items, qty, totalCost } = userCartInfo;

  const cartItems = items ? (
    items.map((pCart) => {
      return <CartItem key={pCart.id} data={pCart} />;
    })
  ) : (
    <p>Loading cart items...</p>
  );

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {cartItems}
      </div>

      {userCartInfo.totalCost > 0 ? (
        <div className="checkout">
          <div className="subtotal">
          <h2>Subtotal: ${userCartInfo.totalCost}</h2>
          </div>
          <div className="buttons">
            <button onClick={() => {navigate("/browsing")}}>Continue Shopping</button>
            <button onClick={() => {navigate("/checkout")}}>
              Checkout
            </button>
          </div>
        </div>

      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};