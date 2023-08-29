import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BrandingImage from '../pages/BrandCustomer/BrandingImage';
import  '../style/common.css';
import '../style/BrandCustomer.css';
import BrandingProductsList from '../pages/BrandCustomer/BrandingProductsList';


const BrandCustomerPage = () => {
  return (
    <>
        <Header />
        <div className='contain'>
            <BrandingImage />
            <BrandingProductsList />
        </div>
        <Footer />
    </>
  )
}

export default BrandCustomerPage