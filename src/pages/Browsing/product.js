import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  console.log(data._id)

  const cartItemCount = cartItems[data._id];

  return (
    <div className="product">
      <Link to={`/browsing/product/${data._id}`} className="product-link">
        <img src={data.imgURL} />
        <div className="description">
          <p>
            <b>{data.name}</b>
          </p>
          <p>{data.cost} VND</p>
        </div>
      </Link>
      <button className="addToCartBttn" onClick={() => addToCart(data._id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
