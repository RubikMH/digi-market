import React from "react";
import Input from "../Input";

const InputEmail = ({ placeholder, autoFocus = false, ...props }) => {
  return (
    <Input
      type="email"
      placeholder={placeholder}
      autoFocus={autoFocus}
      dir="ltr"
      {...props}
    />
  );
};
export default InputEmail;
