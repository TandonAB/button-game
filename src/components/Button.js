import React from "react";

const Button = ({ color, isEnable, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      disabled={isEnable}
    >
      Click me
    </button>
  );
};

export default Button;
