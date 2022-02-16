import React from "react";
import Input from "../Input";

const InputText = ({
  placeholder,
  autoFocus = false,
  required = false,
  ...props
}) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      autoFocus={autoFocus}
      dir="ltr"
      required={required}
      {...props}
    />
  );
};
export default InputText;
