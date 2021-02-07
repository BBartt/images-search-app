import React from "react";

const icons = {
  magnifying_glass: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 520"
      width="30"
      height="30"
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="36"
        strokeLinecap="round"
        d="M280 278a153 153 0 10-2 2l170 170m-91-117l110 110-26 26-110-110"
      />
    </svg>
  ),
};

const Icon = ({ name, color, className }) => (
  <span className={`icon ${color} ${className} `}>{icons[name]}</span>
);

export default Icon;
