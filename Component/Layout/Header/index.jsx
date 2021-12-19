import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";
import Button from "../../Button";
import H1 from "../../Typography/H1";

const Header = () => {
  const handelMode = (e) => {
    console.log("changhe");
  };
  const color = "white";
  const theme = useTheme();

  return (
    <div>
      Header
      {/* <Button onClick={handelMode}>dark mode </Button> */}
      {/* <div
        className={css`
          padding: 32px;
          background-color: ${theme.colors.like};
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <H1 align="center">به ریموت جابب خوش آمدید</H1>
      </div> */}
    </div>
  );
};
export default Header;
