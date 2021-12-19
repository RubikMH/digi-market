import React from "react";
import Input from "../Input";

const InputText = ({ placeholder, autoFocus = false, ...props }) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      autoFocus={autoFocus}
      dir="ltr"
      {...props}
    />
  );
};
export default InputText;
