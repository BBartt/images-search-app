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
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.717 6.697l-1.414-1.414L12 10.586 6.697 5.283 5.283 6.697 10.586 12l-5.303 5.303 1.414 1.414L12 13.414l5.303 5.303 1.414-1.414L13.414 12z"
        opacity=".75"
      />
    </svg>
  ),
};

const Icon = ({ name, color, className }) => (
  <span className={`icon ${color} ${className} `}>{icons[name]}</span>
);

export default Icon;
