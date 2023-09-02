import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/Cate.css';

const CategoriesLine = () => {
  return (
    <>
      <div className="cateHeader text-center mb-5 fs-2 fw-bold">Browse All Catgories</div>
      <div class="row mt-2 g-4">
        <div class="col-md-3">
            <div class="card shadow-lg p-1">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> 
                      <span className='ms-3'>Laptop </span>
                    </div>
                    <div><img src={require('../../assets/LaptopCate.jpeg')} alt='Laptop Category' height="100" className='w-100' /></div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-lg p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                  <div class="flex-column lh-1 imagename">
                    <span className='ms-3'>Keyboard </span>
                  </div>
                  <div><img src={require('../../assets/KeyboardCate.jpeg')} alt='Keyboard Category' height="100" width="100" /></div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-lg p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename">
                      <span className='ms-3'>Headphone </span>
                    </div>
                    <div><img src={require('../../assets/HeadphoneCate.png')} alt='Headphone Category' height="100" width="100" /></div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-lg p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                  <div class="flex-column lh-1 imagename">
                    <span className='ms-3'>Mouse </span>
                  </div>
                  <div><img src={require('../../assets/MouseCate.jpeg')} alt='Mouse Category' height="100" width="100" /></div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-lg p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                  <div class="flex-column lh-1 imagename">
                    <span className='ms-3'>Desktop </span>
                    <span>Screen</span>
                  </div>
                  <div><img src={require('../../assets/ScreenCate.jpg')} alt='Desktop Screen Category' height="100" width="120" /></div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-lg p-2">
                <div class="d-flex justify-content-between align-items-center p-2 my-auto">
                  <div class="flex-column lh-1 imagename">
                    <span className='ms-3'>More </span>
                  </div>
                  <div><img src={require('../../assets/MoreCate.png')} alt='Categories icons created by alkhalifi design - Flaticon' height="50" width="50" /></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesLine