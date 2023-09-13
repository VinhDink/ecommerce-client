import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import axios from 'axios';
import Checkbox from '../../components/Checkbox';
import ShowcaseSection from './ShowcaseSection';
import { ShopContext } from '../../context/shop-context';
import { Product } from './product';

const categories = [
  {
    id: 1,
    name: 'Mobile phone', 
    items: [
      {name:'iphone 6', cost: 100},
      {name:'iphone 13', cost: 1000}
    ]
  },
  {
    id: 2,
    name: 'Desktop Screen',
    items: [
      {name:'Acer 24"', cost: 300},
      {name:'Asus 27"', cost: 400},
    ] 
  },
  {
    id: 3,
    name: 'Laptop',
    items: [
      {name:'Acer Nitro', cost: 300},
      {name:'Asus ROG', cost: 400},
    ] 
  },
  {
    id: 4,
    name: 'Mouse',
    items: [
      {name:'Logitech G304', cost: 300},
      {name:'Zowie', cost: 400},
    ] 
  }
]

const FilterSection = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [alteredProduct, setAlteredProduct] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const { userId, PRODUCTS, allCategories, fetchAllProduct, getUser, fetchAllCategories, arrSearched } = useContext(ShopContext)
  

  useEffect(() => {
    fetchAllProduct();
    getUser();
    fetchAllCategories();
    setAlteredProduct(PRODUCTS)
  }, [userId]);

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value);
    setRangeValue(newValue);
  };

  const handleFiltersChange = (cid) => {
    if (checkedCategories.includes(cid)) {
      setCheckedCategories(checkedCategories.filter((cate) => {return cate !== cid}));
    } else {
      setCheckedCategories([...checkedCategories, cid]);
    }
    console.log(checkedCategories)
  };

  const filterOp = allCategories.map((c) => {
    return (
      <Checkbox key={c._id} data={c} onChange={() => {handleFiltersChange(c._id)}}/>
    )
  })

  const handeSorting = (e) => {
    e.preventDefault()

    // if(arrSearched.length > 0) {
    //   const filteredArray = arrSearched.filter((p) => {
    //     return checkedCategories.includes(p.cateId)
    //   })
    //   const sortedArray = arrSearched.filter((p) => {return p.cost > rangeValue})
    //   setAlteredProduct(sortedArray, filteredArray)
    //   } else {
      const filteredArray = PRODUCTS.filter((p) => {
        return checkedCategories.includes(p.cateId)
      })
      const sortedArray = PRODUCTS.filter((p) => {return p.cost > rangeValue})
      setAlteredProduct(sortedArray, filteredArray)
    
  }

  return (
    <>
      <div className='row g-4 mt-3 ' onRefresh={() => {fetchAllProduct(); getUser()}}>
        <div class="col-2 ">
          <h4 className='m-0 ms-4 mb-4'>Filter with: </h4>
            <div className='d-flex flex-column ms-5 me-5 mb-5'>
              <div className='filterOpts'>
                {filterOp}
              </div>
            </div>
          <h4 className='m-0 ms-4 mb-4'>Sort by: </h4>
          <div className='d-flex flex-column ms-5 me-5 mb-5'>
              <div className='SortRange'>
                <label for="customRange" className="form-label">Price: $&nbsp;</label>
                <span>{rangeValue}</span>
              </div>
              <input type="range" className="form-range" min="0" max="5000" step="1" id="customRange" value={rangeValue} onChange={handleRangeChange}/>
          </div>
          <div className='ms-4 me-2 mb-4'>
            <button className='btn btn-success btn-sm w-100' onClick={(e) => {handeSorting(e)}}>Apply</button>
          </div>
        </div>
        <ShowcaseSection products={alteredProduct} />
      </div>
    </>
  )
}

export default FilterSection