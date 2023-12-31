import React from 'react';
import  '../style/common.css';
import '../style/Checkbox.css';

const Checkbox = ({data}) => {
  return (
    <>
        <div className='row gx-2'>
            <input className="form-check-input checkbox col-1" type="checkbox" id={data.name} />
            <label className='col' for={data.name}>{data.name}</label>
        </div>
    </>
  )
}

export default Checkbox