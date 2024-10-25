import React from "react";

const InputField = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  style = {},
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      className={className}
      {...rest}
    />
  );
};

export default InputField;
