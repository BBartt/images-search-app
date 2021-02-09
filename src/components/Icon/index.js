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
  home: (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="heroicon-ui"
        d="M13 20v-5h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.59l-.3.3a1 1 0 11-1.4-1.42l9-9a1 1 0 011.4 0l9 9a1 1 0 01-1.4 1.42l-.3-.3V20a2 2 0 01-2 2h-3a2 2 0 01-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 012 2v5h3z"
      />
    </svg>
  ),
};

const Icon = ({ name, color, className }) => (
  <span className={`icon ${color} ${className} `}>{icons[name]}</span>
);

export default Icon;
