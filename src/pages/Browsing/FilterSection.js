import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Checkbox from '../../components/Checkbox';

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
  const filterOp = categories.map((c) => {
    return (
      <Checkbox key={c.id} data={c}/>
    )
  })
  return (
    <>
        {/* <div className='col-3 border-2 border-end'></div> */}
        <div class="col-2">
          <h4 className='m-0 ms-4 mb-4'>Filter by: </h4>
            <div className='d-flex flex-column'>
              <div className='ms-5'>
                {filterOp}
              </div>
            </div>
        </div>
    </>
  )
}

export default FilterSection