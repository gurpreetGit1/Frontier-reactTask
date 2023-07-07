import React, { useState } from "react";
import Star from "./Star";

function StarRating({ totalStars = 5, selectedStars, setSelectedStars }) {
  const createArray = (length) => [...Array(length)];

  return (
    <>
      {createArray(totalStars).map((item, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => setSelectedStars(index + 1)}
        />
      ))}
    </>
  );
}

export default StarRating;
