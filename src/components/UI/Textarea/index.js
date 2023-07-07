import React from "react";

const Textarea = React.forwardRef(({ attr, className }, ref) => {
  const classes = `${className ? className : ""}`;
  return <textarea ref={ref} className={classes} {...attr} />;
});

export default Textarea;
