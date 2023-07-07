import React from "react";

const Button = ({ className, children, attr }) => {
  const classes = `btn ${className ? className : ""}`;
  return (
    <button className={classes} {...attr}>
      {children}
    </button>
  );
};

export default Button;
