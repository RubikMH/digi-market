import { css } from "@emotion/css";
import React from "react";

export default function index({
  type = "text",
  placeholder,
  autoFocus = false,
  dir = "rtl",
  onChange,
}) {
  const handelOnChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className={css`
        width: 100%;
        height: 1.6rem;
        direction: ${dir};
      `}
      onChange={handelOnChange}
    />
  );
}
