import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../data/products";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [PRODUCTS, setPRODUCT] = useState([]);
  const [userId, setUserId] = useState('');
  const [userCartInfo, setUserCartInfo] = useState({});
  const [arrSearched, setArrSearched] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const fetchUserCartItem = async (uid) => {
    try {
      const response = await axios.get(`/customer/${uid}/cart`)
      console.log(response.data)
      if ( userCartInfo !== response.data.totalCost ) {
        setUserCartInfo(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = async () => {
    try {
      const response = await axios.get("/me");
      console.log(response.data.userId);
      if (userId != response.data.userId) {
        setUserId(response.data.userId);
      } else return response.data.userId
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllProduct = async() => {
    try {
      const response = await axios.get('/browsing/all')
      if(PRODUCTS != response.data) {
        setPRODUCT(response.data);
      }
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

  const removeFromCart = async (itemId, customerId) => {
    await axios.post(`/browsing/product/${itemId}/removeItemCart/${customerId}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log("Failed to removeFromCart: " + err))
  };

  const searchProduct = (string) => {
    if(string) {
      const searched = PRODUCTS.filter((p) => {return p.name.includes(string)})
      setArrSearched(searched)
    }
    if(!string) { setArrSearched (PRODUCTS)}
    
    console.log(arrSearched)
  }

  const checkout = () => {
  };

  const contextValue = {
    cartItems,
    userId,
    userCartInfo,
    PRODUCTS,
    allCategories,
    arrSearched,
    setCartItems,
    setArrSearched,
    getUser,
    fetchAllProduct,
    fetchAllCategories,
    fetchUserCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    searchProduct,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};