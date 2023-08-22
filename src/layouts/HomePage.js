import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../pages/Home/HeroSection';
import CategoriesLine from '../pages/Home/CategoriesLine';
import BannerSection from '../pages/Home/BannerSection';
import ProductSection from '../pages/Home/ProductSection';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className='container'>
        <CategoriesLine />
        <BannerSection />
        <ProductSection />
      </div>
      <Footer />
    </>
  )
}

export default HomePage