import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../data/products";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [PRODUCTS, setPRODUCT] = useState([]);
  const [userId, setUserId] = useState('');
  const [userCartItem, setUserCartItem] = useState({});
  const [allCategories, setAllCategories] = useState([]);

  const fetchUserCartItem = async (uid) => {
    try {
      const response = await axios.get(`/customer/${uid}/cart`)
      console.log(response.data)
      setUserCartItem(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = async () => {
    try {
      const response = await axios.get("/me");
      console.log(response.data.userId);
      setUserId(response.data.userId);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllProduct = async() => {
    try {
      const response = await axios.get('/browsing/all')
      setPRODUCT(response.data);
      console.log("Found PRODUCTS")
    } catch (error) {
      console.error(error);  
    }
  };

  const fetchAllCategories = async() => {
    try {
      const response = await axios.get('/browsing/categories')
      setAllCategories(response.data);
      console.log("Found Category" + response.data)
    } catch (error) {
      console.error(error);  
    }
  };

  // const getDefaultCart = () => {
  //   let cart = {};
  //   for (let i = 1; i < PRODUCTS.length + 1; i++) {
  //     cart[i] = 0;
  //   }
  //   return cart;
  // };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = async (itemId, customerId) => {
    await axios.post(`/browsing/product/${itemId}/addToCart/${customerId}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log("Failed to addToCart: " + err))
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
  };

  const contextValue = {
    cartItems,
    userId,
    userCartItem,
    PRODUCTS,
    allCategories,
    getUser,
    fetchAllProduct,
    fetchAllCategories,
    fetchUserCartItem,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};