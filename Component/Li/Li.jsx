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
          background-color: #a4ec4f;
        }
        border-radius: 13px;
      `}
    >
      {children}
    </li>
  );
};

export default Li;
