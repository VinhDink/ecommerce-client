import React from 'react';
import  '../style/common.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import OrderManager from '../pages/seller/OrderManager';

const ProductManagerPage = () => {
  return (
    <>
        <div className='product-Detail'>
            <OrderManager />
        </div>
        <Footer />
    </>
  )
}

export default ProductManagerPage