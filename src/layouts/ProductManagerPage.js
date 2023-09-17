import React from 'react';
import  '../style/common.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import  ProductManager from '../pages/seller/ProductManager';

const ProductManagerPage = () => {
  return (
    <>
        <div className='product-Detail'>
            <ProductManager />
        </div>
        <Footer />
    </>
  )
}

export default ProductManagerPage