import React from 'react';
import './AchievementItem.scss';

const AchievementItem = ({ achievement }) => {
  const { description, image, name, percent } = achievement;
  
  return (
    <div className="achievement-wrapper">
      <img className="achievement-icon" src={image} alt={name}/>
      <div className="achievement-detail">
        <p className="percentage achievement-text">{percent} %</p>
        <h4 className="achievement-title achievement-text">{name}</h4>
        <p className="achievement-decription achievement-text">{description}</p>
      </div>
    </div>
  );
}

export default AchievementItem;