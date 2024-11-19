import React from 'react';
import './index.css';

function Car(props) {
  const { car } = props;
  return <div className='car'>{car}</div>;
}

export default Car;
