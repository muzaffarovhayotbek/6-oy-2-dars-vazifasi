import React from 'react';
import './index.css';

function Address(props) {
  const {region, zip} = props.address;
  return (
    <div>
  <div className="add">
  <h3 className='region'>{region}</h3>
  <h3 className='zip'>{zip}</h3>
  </div>
    </div>
  )
}

export default Address
