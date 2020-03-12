import React from 'react';
import './Screenshot.scss';

const Screenshot = ({ screenshot }) => {
  const { image } = screenshot;

  return (
    <div className="screenshot">
      <img className="screenshot__image" src={image} alt=""/>
    </div>
    
  )
}

export default Screenshot;