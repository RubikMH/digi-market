import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";
import Button from "../../Button";
import H1 from "../../Typography/H1";
import Li from "../../Li/Li";
import HyperLink from "../../HyperLink/HyperLink";
import Space from "../../Typography/Space";
import Navbar from "../../Navabr/Navbar";

const Header = () => {
  const handelMode = (e) => {
    console.log("changhe");
  };

  const theme = useTheme();

  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: center;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding-top: 10px;
        `}
      >
        <div
          className={css`
            display: flex;
            width: 50%;
          `}
        >
          <Navbar />
        </div>
        <div
          className={css`
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-content: center;
            align-items: baseline;
          `}
        >
          <div
            className={css`
              width: 75px;
              margin: 10px;
            `}
          >
            <HyperLink href={`/login`}>
              <Button primary>ورود </Button>
            </HyperLink>
          </div>

          <div
            className={css`
              width: 75px;
              margin: 10px;
              margin-left: 20px;
            `}
          >
            <HyperLink href={`/register`}>
              <Button>ثبت نام </Button>
            </HyperLink>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Header;
