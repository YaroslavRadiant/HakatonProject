import React from "react";

const Col = ({ isOver, children }) => {
  const className = isOver ? " bg-yellow-200" : "";

  return <div className={`w-[15rem] max-w-300 ${className}`}>{children}</div>;
};

export default Col;
