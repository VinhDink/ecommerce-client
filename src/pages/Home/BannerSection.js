import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/Banner.css';


const BannerSection = () => {
  return (
    <>
      <div className="bannerheading fs-2 fw-bold text-center my-5">Trending Brands</div>
      <div className="row banner">
          <div className="logo col-4">
              <img src={require("../../assets/ROGLogoVector.jpg")} className="bannerimage img-fluid" alt="Asus ROG Logo"/>
          </div>
          <div className="marketbanner col-8">
              <img src={require("../../assets/artiom-vallat-1uBCLmu5BqA-unsplash.jpg")} className="bannerimage img-fluid" alt="Asus ROG banner"/>
          </div>
      </div>
      <div className="my-4"></div>
      <div className="row banner">
          <div className="logo col-8">
              <img src={require("../../assets/hugo-agut-tugal-6cdIdu8KkLg-unsplash.jpg")} className="bannerimage img-fluid" alt="Asus ROG Logo"/>
          </div>
          <div className="marketbanner col-4">
              <img src={require("../../assets/laurenz-heymann-wAygsCk20h8-unsplash.jpg")} className="bannerimage img-fluid" alt="Asus ROG banner"/>
          </div>
      </div>
    </>
  )
}

export default BannerSection