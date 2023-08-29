import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const BrandingImage = () => {
  return (
        <>
            <div className='text-center fw-bold brandhead'>Brand's Name</div>
            <div className='container mb-5 pb-5 border-bottom border-4'>
                <div className='row mb-5'>
                    <img src={require('../../assets/artiom-vallat-1uBCLmu5BqA-unsplash.jpg')} alt='brand-logo' className='img-fluid img-branding'/>
                    
                </div>
                <div className='row'>
                    <div className='col'>
                        <select class='form-select'>
                            <option value='0'selected>Choose your categories: </option>
                            <option value='1'>Categories 1</option>
                            <option value='2'>Categories 2</option>
                            <option value='3'>Categories 3</option>
                        </select>
                    </div>
                    <div className='col'>
                        <select class='form-select'>
                            <option value='0'selected>Sort by price: </option>
                            <option value='1'>Ascending</option>
                            <option value='2'>Descending</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandingImage