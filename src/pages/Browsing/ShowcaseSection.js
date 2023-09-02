import React from 'react';
import { PRODUCTS } from "../../data/products";
import { Product } from "./product";
import 'bootstrap/dist/css/bootstrap.css';
import "../../style/shop.css";

const ShowcaseSection = () => {


    return (
        <>
            <div class="col border-black border-2 border-start">
                <div class="row mb-5">
                    <div className="products">
                        {PRODUCTS.map((product) => (
                            <Product data={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowcaseSection