import React from "react";

const Pointer = ({ selected }) => {
  return (
    <div
      className="pointer"
      style={selected ? { display: "block" } : { display: "none" }}
    ></div>
  );
};

export default Pointer;
