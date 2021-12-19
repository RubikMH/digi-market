import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";

const Button = ({ type = "button", onSubmit, onClick, children, loading }) => {
  const theme = useTheme();
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <button
        className={css`
          width: 100%;
          background-color: ${theme.colors.primary};
          color: white;
          font-size: ${theme.typography.paragraph};
          text-decoration: none;
          padding: ${theme.spaces[3]};
          border: ${theme.border[1]};
          border-radius: ${theme.borderRadius[1]};
          display: inline-block;
          position: relative;
          cursor: pointer;
          transition-duration: 0.4;
          &:hover {
            box-shadow: ${theme.boxShadow.light};
          }
        `}
        type={type}
        onClick={onClick}
        onSubmit={onSubmit}
      >
        {loading && "loading"}
        {!loading && children}
      </button>
    </div>
  );
};

export default Button;
