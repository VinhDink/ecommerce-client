import CustomerOrderManager from "../pages/customer/OrderManager";
import React from 'react';
import  '../style/common.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CustomerOrderManagerPage = () => {
    return (
        <>
            <Header />
            <div className='product-Detail'>
                <CustomerOrderManager />
            </div>
            <Footer />
        </>
    )
    }

export default CustomerOrderManagerPage