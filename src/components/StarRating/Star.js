import React from "react";

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <>
    {selected && (
      <i
        onClick={onSelect}
        className="fs-1 star text-warning-light icon-star-fill"
      ></i>
    )}
    {!selected && (
      <i
        onClick={onSelect}
        className="fs-1 star text-warning-light icon-star-outline"
      ></i>
    )}
  </>
);

export default Star;
