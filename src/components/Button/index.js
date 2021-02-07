import React from "react";
import Icon from "../Icon";

const Button = ({
  className,
  disabled = false,
  children,
  onClick,
  iconColor = "black",
  icon,
}) => {
  return (
    <button
      disabled={!!disabled}
      className={[
        "button",
        className ? className : "",
        disabled && "disabled",
      ].join(" ")}
      onClick={(e) => onClick && onClick(e)}
    >
      {icon && <Icon name={icon} color={iconColor} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
