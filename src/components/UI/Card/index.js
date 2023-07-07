import React from "react";

const Card = ({ children, className }) => {
  const classes = `card ${className ? className : ""}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
