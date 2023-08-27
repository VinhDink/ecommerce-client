import React from 'react';
import '../../style/Showcase.css'
import 'bootstrap/dist/css/bootstrap.css';

const ShowcaseSection = () => {
    return (
        <>
            <div class="col border-black border-2 border-start">
                <div class="container">
                    <div class="row mb-5 shadow-lg">
                        <img src={require('../../assets/unnamed.png')} className="m-0 p-0 showcaseimg" alt="Product Card"/>
                        <div class="col-md-7 p-0 ps-1">
                            <div className="h-100">
                                <div className="m-3">
                                    <h2>Product name</h2>
                                    <p>Description</p>
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 p-3 d-flex flex-column align-items-center">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h2 class="mb-1 me-1 text-center">$13.99</h2>
                            </div>
                            <div className='d-flex flex-column justify-content-end h-100 w-100'>
                                <button class="btn btn-primary btn-sm buynowbutton text-dark" type="button">Buy Now</button>
                                <button class="btn btn-outline-primary btn-sm mt-2 addtocartbutton text-dark" type="button">Add to cart</button>
                            </div>
                        </div>  
                    </div>  
                    <div class="row mb-5 shadow-lg">
                        <img src={require("../../assets/artiom-vallat-1uBCLmu5BqA-unsplash.jpg")} className="m-0 p-0 showcaseimg" alt="Product Card"/>
                        <div class="col-md-7 p-0 ps-1">
                            <div className="h-100">
                                <div className="m-3">
                                    <h2>Product name</h2>
                                    <p>Description</p>
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 p-3 d-flex flex-column align-items-center">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h2 class="mb-1 me-1 text-center">$13.99</h2>
                            </div>
                            <div className='d-flex flex-column justify-content-end h-100 w-100'>
                                <button class="btn btn-primary btn-sm buynowbutton text-dark" type="button">Buy Now</button>
                                <button class="btn btn-outline-primary btn-sm mt-2 addtocartbutton text-dark" type="button">Add to cart</button>
                            </div>
                        </div>  
                    </div>  
                      
                </div>
            </div>
        </>
    )
}

export default ShowcaseSection