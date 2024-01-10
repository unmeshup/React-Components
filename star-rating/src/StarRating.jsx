import { useState } from "react";
import { FaStar } from "react-icons/fa";
import React from 'react'

const StarRating = ({noOfStars = 5}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  
    function handleClick(getCurrentIndex) {
      setRating(getCurrentIndex);
    }
  
    function handleMouseEnter(getCurrentIndex) {
      setHover(getCurrentIndex);
    }
  
    function handleMouseLeave() {
      setHover(rating);
    }
  return (
    <div className="star-rating"> 
    {[...Array(noOfStars)].map((_, index) => {
      index += 1;

      return (
        <FaStar
          key={index}
          className={index <= (hover || rating) ? "active" : "inactive"}
          onClick={() => handleClick(index)}
          onMouseMove={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
          size={100}
        />
      );
    })}
  </div>
  )
}

export default StarRating

