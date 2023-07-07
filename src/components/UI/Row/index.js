import React from "react";

const Row = ({ children, className }) => {
  const classes = `row ${className ? className : ""}`;
  return <div className={classes}>{children}</div>;
};

export default Row;
