import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/Cate.css';

const CategoriesLine = () => {
  return (
    <>
      <div className="cateHeader text-center mb-5 fs-2 fw-bold">Browse All Catgories</div>
      <div class="row mt-2 g-4 justify-content-center">
        <div class="col-md-3">
            <div class="card shadow-lg p-1">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> 
                      <span className='ms-3'>Graphic </span>
                      <span>Card</span>
                    </div>
                    <div><img src={require('../../assets/GpuCate.webp')} height="100" className='w-100' /></div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-lg p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                  <div class="flex-column lh-1 imagename">
                    <span className='ms-3'>Processor </span>
                  </div>
                  <div><img src={require('../../assets/CPUCate.jpg')} height="100" width="150" /></div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-lg p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename">
                      <span className='ms-3'>Hard </span>
                      <span>Drive</span>
                    </div>
                    <div><img src={require('../../assets/HarddriveCate.png')} height="100" width="100" /></div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-lg p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                  <div class="flex-column lh-1 imagename">
                    <span className='ms-3'>Mobile </span>
                    <span>Phone</span>
                  </div>
                  <div><img src={require('../../assets/MobileCate.jpeg')} height="100" width="100" /></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesLine