import React from "react";
import Input from "../Input";

const InputPassword = ({ placeholder, autoFocus = false, ...props }) => {
  return (
    <Input
      type="password"
      placeholder={placeholder}
      autoFocus={autoFocus}
      dir="ltr"
      {...props}
    />
  );
};
export default InputPassword;
