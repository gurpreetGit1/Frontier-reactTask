import React from "react";

const Cols = ({ children, className }) => {
  const classes = `${className ? className : ""}`;
  return <div className={classes}>{children}</div>;
};

export default Cols;
