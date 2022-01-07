import React from "react";
import { css, cx } from "@emotion/css";

const Alert = ({ Alert, children }) => {
  return (
    <div
      className={css`
        display: ${Alert ? "block" : "none"};
        width: 100%;
        background-color: #f03e3e;
        opacity: 0.7;
      `}
    >
      {children}
    </div>
  );
};

export default Alert;
