import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/Product.css';

const products = [
    {id: 1, name: 'RTX 2060', price: 999.00, onSale: true, onDis: false, saleDis: 10},
    {id: 2, name: 'RTX 3060', price: 999.00, onSale: true, onDis: false, saleDis: 10},
    {id: 3, name: 'RTX 4060', price: 999.00, onSale: false, onDis: false, saleDis: 10},
    {id: 4, name: 'RTX 5060', price: 999.00, onSale: true, onDis: false, saleDis: 10},
    {id: 5, name: 'Laptop Asus', price: 999.00, onSale: false, onDis: false, saleDis: 10},
    {id: 6, name: 'RTX 9060', price: 999.00, onSale: false, onDis: false, saleDis: 10},
    {id: 7, name: 'Laptop Acer', price: 999.00, onSale: true, onDis: false, saleDis: 10},
]
const ProductSection = () => {
    const pCheckOnSale = products.map((p) => {
        if ( p.onSale == true ) {
            return (
                <>
                    <div className='col-md-3 col-6'>
                        <div className="categories d-flex flex-column align-items-center p-0 shadow-lg ">
                            <img src={require('../../assets/unnamed.png')} className="rounded-circle imgCat mt-3" alt="GPU"/>
                            <div className="cateinfo my-3 d-flex flex-column align-items-center">
                                <div>Person</div>
                                <p className="job m-0"> Job Title</p>
                            </div>
                        <a href='#' className="btn btn-success mb-3 btnCate">See More</a>
                        </div>
                    </div>
                    <div className='col-md-3 col-6'>
                        <div className="categories d-flex flex-column align-items-center p-0 shadow-lg ">
                            <img src={require('../../assets/unnamed.png')} className="rounded-circle imgCat mt-3" alt="GPU"/>
                            <div className="cateinfo my-3 d-flex flex-column align-items-center">
                                <div>Person</div>
                                <p className="job m-0"> Job Title</p>
                            </div>
                        <a href='#' className="btn btn-success mb-3 btnCate">See More</a>
                        </div>
                    </div>
                </>
            )
        }
    })
  return (
    <>
        <div className="text-center my-5 fs-2 fw-bold">Our Products</div>
        <div className="row g-4">
            { pCheckOnSale }
        </div>
        <div className='my-5'></div>
    </>
  )
}

export default ProductSection