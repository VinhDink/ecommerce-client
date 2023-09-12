import React from 'react';
import  '../style/common.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SellerRegister from '../pages/common/SellerRegister';

const SellerRegisterPage = () => {
  return (
    <>
        <Header />
        <div className='product-Detail'>
            <SellerRegister />
        </div>
        <Footer />
    </>
  )
}

export default SellerRegisterPage