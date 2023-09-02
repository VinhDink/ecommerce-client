import React from 'react';
import  '../style/common.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import FilterSection from '../pages/Browsing/FilterSection';
import ShowcaseSection from '../pages/Browsing/ShowcaseSection';
import HeadingSection from '../pages/Browsing/HeadingSection';

const BrowsingPage = () => {
  return (
    <>
        <Header />
        <HeadingSection />
        <div className='row g-4 mt-3 '>
            <FilterSection />
            <ShowcaseSection />
        </div>
        <Footer />
    </>
  )
}

export default BrowsingPage