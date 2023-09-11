import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../data/products";
import { useState } from "react";
import axios from "axios";
import "../../style/productDetails.css";

export const ProductDetails = () => {
  const { id } = useParams();
  const pid = id.toString();
  const { addToCart, cartItems } = useContext(ShopContext);
  const [productFound, setProductFound] = useState({})

  const cartItemCount = cartItems[pid];

  useEffect(() => {
    const fetchProduct = async () => {
      await axios.get(`/browsing/product/${pid}`)
      .then((res) => {
        setProductFound(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log('Cannot find product in route product detail: ' + err);
      })
    };
    fetchProduct();
  }, [pid]);

  if(productFound == {}) {
    return(
      <div>Product not found</div>
    )
  }

  const { _id, name, imgURL, brand, cost , category_att} = productFound

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={imgURL} alt={name} className="product-image" />
      </div>
      <div className="product-details-container">
        <h1 className="product-name">{name}</h1>
        <div className="product-details">
          <p><b>Price:</b> {cost} $</p>
          <p><b>Description:</b></p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quis perspiciatis voluptates possimus, sit necessitatibus in omnis 
            aut praesentium aspernatur id neque voluptatibus perferendis repellat, 
            pariatur esse fuga, voluptas sequi numquam!</p>
          <p><b>Brand:</b>{brand}</p>
          <button className="addToCartBttn" onClick={() => addToCart(pid)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
