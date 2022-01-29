import React from "react";
import { css, cx } from "@emotion/css";

const Li = ({ children }) => {
  return (
    <li
      className={css`
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: stretch;
        padding: 5px 15px;
        :hover {
          background-color: #43cad9;
        }
        border-radius: 13px;
      `}
    >
      {children}
    </li>
  );
};

export default Li;
