import React from 'react';
import  '../style/common.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { ProductDetails } from '../pages/ProductDetails/productDetails';

const ProductDetailPage = () => {
  return (
    <>
        <Header />
        <div className='product-Detail'>
            <ProductDetails />
        </div>
        <Footer />
    </>
  )
}

export default ProductDetailPage