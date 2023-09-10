import React from 'react';
import  '../style/common.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SellerLogin from '../pages/common/SellerLogin';

const SellerLoginPage = () => {
  return (
    <>
        <Header />
        <div className='product-Detail'>
            <SellerLogin />
        </div>
        <Footer />
    </>
  )
}

export default SellerLoginPage