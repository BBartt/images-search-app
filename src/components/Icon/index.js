import React from "react";

const icons = {};

const Icon = ({ name, color }) => (
  <span className={`icon ${color}`}>{icons[name]}</span>
);

export default Icon;
