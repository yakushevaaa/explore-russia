import React from 'react';
import './TravelCard.scss';

const TravelCard = ({ number, title, description }) => {
  return (
    <div className="travel-card">
      <span className="travel-card__number">{number}</span>
      <h3 className="travel-card__title">{title}</h3>
      <p className="travel-card__description">{description}</p>
    </div>
  );
};

export default TravelCard;