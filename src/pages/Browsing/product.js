import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data }) => {
  const { userId, addToCart, cartItems, getUser} = useContext(ShopContext);

  const cartItemCount = cartItems[data._id];

  return (
    <div className="product">
      <Link to={`/browsing/product/${data._id}`} className="product-link">
        <img src={`http://localhost:4000/api/images/${data.imgURl}`} alt={data.imgURl} />
        <div className="description">
          <p>
            <b>{data.name}</b>
          </p>
          <p>{data.cost} VND</p>
        </div>
      </Link>
      <button className="addToCartBttn" onClick={() => {console.log(`/browsing/product/${data._id}/addToCart/${userId}`); addToCart(data._id, userId)}}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
