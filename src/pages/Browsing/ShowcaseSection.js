import React from 'react';
import { PRODUCTS } from "../../data/products";
import { Product } from "./product";
import 'bootstrap/dist/css/bootstrap.css';
import "../../style/shop.css";

const ShowcaseSection = ({ customerId, products }) => {
    

    return (
        <>
            <div class="col border-black border-2 border-start">
                <div class="row mb-5">
                    <div className="products">
                        {products.map((p) => (
                            <Product customerId={customerId} data={p} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowcaseSection