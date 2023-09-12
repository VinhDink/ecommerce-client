import React from 'react';
import  '../style/common.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FilterSection from '../pages/Browsing/FilterSection';
import HeadingSection from '../pages/Browsing/HeadingSection';

const BrowsingPage = () => {
  return (
    <>
        <Header />
        <HeadingSection />
            <FilterSection />
        <Footer />
    </>
  )
}

export default BrowsingPage