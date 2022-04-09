import React from "react";
import "../styles/Button.css";

const Button = ({ handleClick, tileShow }) => {
  return (
    <button
      className="button"
      onClick={() => {
        handleClick();
      }}
    >
      {tileShow}
    </button>
  );
};

export default Button;
