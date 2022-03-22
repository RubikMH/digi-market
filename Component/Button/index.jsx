import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";

const Button = ({
  type = "button",
  onSubmit,
  onClick,
  children,
  loading,
  primary,
}) => {
  const theme = useTheme();
  return (
    <div className="w-full">
      <button
        className={`w-full ${
          primary ? "bg-red-600" : "bg-blue-600"
        } text-cyan-50 text-base p-2 border-2 rounded-sm inline-block relative cursor-pointer duration-100 hover:shadow-lg`}
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

{
  /* <div
className={css`
  width: 100%;
`}
>
<button
  className={css`
    width: 100%;
    background-color: ${primary
      ? theme.colors.primary
      : theme.colors.secondary};
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
</div> */
}
