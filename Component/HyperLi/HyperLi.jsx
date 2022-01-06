import { css, cx } from "@emotion/css";

const HyperLi = ({ children }) => {
  return (
    <li
      className={css`
        padding: 5px 20px;
        :hover {
          border-radius: 8px;
          background-color: green;
          color: wheat;
        }
      `}
    >
      {children}
    </li>
  );
};

export default HyperLi;
