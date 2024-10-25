import React, { useRef } from "react";
import styles from "./InputField.module.css";

const InputField = ({
  placeholder = "",
  value,
  onChange,
  className = "",
  ...rest
}) => {
  const textareaRef = useRef(null);
  const handleInput = () => {
    if (textareaRef.current) {
      // Reset height to auto to calculate new height
      textareaRef.current.style.height = "auto";
      // Set height based on the scroll height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  return (
    <input
      type="text"
      ref={textareaRef}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e);
        handleInput(); // Call handleInput on each change to adjust height
      }}
      className={`${styles.textarea} ${className}`}
      {...rest}
    />
  );
};

export default InputField;
