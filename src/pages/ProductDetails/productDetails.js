import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { useState } from "react";
import axios from "axios";

export const ProductDetails = () => {
  const { id } = useParams();
  const pid = id.toString();
  const { addToCart, cartItems, getUser } = useContext(ShopContext);
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
    console.log(getUser())
  }, [pid]);

  if(productFound == {}) {
    return(
      <div>Product not found</div>
    )
  }

  const displayImage = (imgURL) => {
    return 'localhost:4000/api/images/' + imgURL
  }

  const { _id, name, imgURl, brand, cost , descrip, category_att} = productFound

  console.log(imgURl)

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={`http://localhost:4000/api/images/${imgURl}`} alt={name} className="product-image" />
      </div>
      <div className="product-details-container">
        <h1 className="product-name">{name}</h1>
        <h1 className="product-name">{getUser}</h1>
        <div className="product-details">
          <p><b>Price:</b> {cost} $</p>
          <p><b>Description:</b></p>
          <p>{descrip}</p>
          <p><b>Brand:</b>{brand}</p>
          <button className="addToCartBttn" onClick={() => addToCart(pid, getUser())}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
