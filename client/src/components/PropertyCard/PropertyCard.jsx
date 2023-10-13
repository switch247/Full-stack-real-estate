import React, { useState } from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertyCard = ({card}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id}/>
      {imageError ? (
        <img src='https://source.unsplash.com/1600x900/?placeholder' alt="unsplash" />
      ) : (
        <img src={card.image} onError={handleImageError} alt="home" />
      )}
      
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{truncate(card.title, {length: 15})}</span>
      <span className="secondaryText">{truncate(card.description, {length: 80})}</span>
    </div>
  );
};

export default PropertyCard;
