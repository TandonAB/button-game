import React from "react";

const Button = ({ color, isDisable, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, margin: '10px', padding: '5px' }}
      disabled={isDisable}
    >
      Click me
    </button>
  );
};

export default Button;
