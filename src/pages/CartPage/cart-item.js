import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({data}) => {
  const { userId, cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <Link to={`/browsing/product/${data.product._id}`} className="product-link">
      <div className="cartItem">
        <img src={data.product.imgURL} />
        <div className="description">
          <p>
            <b>{data.product.name}</b>
          </p>
          <p> Price: ${data.product.cost}</p>
          <div className="countHandler">
            <button onClick={() => {removeFromCart(data.product._id, userId)}}> - </button>
            <input
              value={data.quantity}
              onChange={(e) => {console.log("qty change")}}
            />
            <button onClick={() => {addToCart(data.product._id, userId)}}> + </button>
          </div>
        </div>
      </div>
    </Link>
  );
};