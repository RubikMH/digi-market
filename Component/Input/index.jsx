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

        background: white;
        border: 1px double #ddd;
        border-radius: 5px;
        box-shadow: 0 0 5px #333;
        color: #666;
        outline: none;
        height: 30px;
        ::placeholder {
          direction: rtl;
        }
        direction: ${dir};
      `}
      onChange={handelOnChange}
    />
  );
}
