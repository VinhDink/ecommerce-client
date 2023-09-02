import React from 'react';
import  '../style/common.css';

import Footer from '../components/Footer';
import Header from '../components/Header';

import { Cart } from '../pages/CartPage/cart'

const CartPage = () => {
  return (
    <>
        <Header />
        <div className='Cart-Page'>
            <Cart />
        </div>
        <Footer />
    </>
  )
}

export default CartPage