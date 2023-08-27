import React from 'react';
import '../../style/Showcase.css'
import 'bootstrap/dist/css/bootstrap.css';

const ShowcaseSection = () => {
    return (
        <>
            <div class="col border-black border-2 border-start">
                <div class="container">
                    <div class="row mb-5">
                        <div className='col m-0 p-0'>
                            <img src={require('../../assets/unnamed.png')} className="rounded-3 shadow-lg showcaseimg" alt="Product Image"/>
                        </div>
                        <div class="col-md-7 p-0 ps-1 shadow-lg rounded-3 shadowproduct">
                            <div className="h-100">
                                <div className="m-3">
                                    <h2>Product name</h2>
                                    <p>Description</p>
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 p-0 align-items-center shadowprice rounded-3">
                            <div className="card card-body w-100 h-100 ">
                                <div className='d-flex flex-column justify-content-center h-100'>
                                    <h2 class="mb-1 me-1 text-center">$13.99</h2>
                                </div>
                                <div className='d-flex flex-column justify-content-end h-100'>
                                    <button class="btn btn-primary btn-sm buynowbutton text-dark" type="button">Buy Now</button>
                                    <button class="btn btn-outline-primary btn-sm mt-2 addtocartbutton text-dark" type="button">Add to cart</button>
                                </div>
                            </div>
                        </div>  
                    </div>  
                    <div class="row mb-5">
                        <div className='col m-0 p-0'>
                            <img src={require("../../assets/artiom-vallat-1uBCLmu5BqA-unsplash.jpg")} className="rounded-3 shadow-lg showcaseimg" alt="Product Image"/>
                        </div>
                        <div class="col-md-7 p-0 ps-1 shadow-lg rounded-3 shadowproduct">
                            <div className="h-100">
                                <div className="m-3">
                                    <h2>Product name</h2>
                                    <p>Description</p>
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 p-0 align-items-center shadowprice rounded-3">
                            <div className="card card-body w-100 h-100 ">
                                <div className='d-flex flex-column justify-content-center h-100'>
                                    <h2 class="mb-1 me-1 text-center">$13.99</h2>
                                </div>
                                <div className='d-flex flex-column justify-content-end h-100'>
                                    <button class="btn btn-primary btn-sm buynowbutton text-dark" type="button">Buy Now</button>
                                    <button class="btn btn-outline-primary btn-sm mt-2 addtocartbutton text-dark" type="button">Add to cart</button>
                                </div>
                            </div>
                        </div>  
                    </div>  
                </div>
            </div>
        </>
    )
}

export default ShowcaseSection