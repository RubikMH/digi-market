import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";
import Button from "../../Button";
import H1 from "../../Typography/H1";
import fetchUrl from "../../../utils/fetchUrl";
import HyperLi from "../../HyperLI/HyperLi";
import HyperLink from "../../HyperLink/HyperLink";
import Space from "../../Typography/Space";

const Header = () => {
  const handelMode = (e) => {
    console.log("changhe");
  };

  const theme = useTheme();

  return (
    <>
      <Space />
      <div
        className={css`
          display: flex;
          width: 100%;
        `}
      >
        <div>
          <ul
            className={css`
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              justify-content: center;
              align-items: center;
            `}
          >
            <HyperLink href="/">
              <HyperLi>خانه</HyperLi>
            </HyperLink>
            <HyperLink href="/courses">
              <HyperLi>درهای آموزشی</HyperLi>
            </HyperLink>
            <HyperLink href="/blogs">
              <HyperLi>بلاک ها</HyperLi>
            </HyperLink>
            <HyperLink href="/about-us">
              <HyperLi>درباره ما</HyperLi>
            </HyperLink>
          </ul>
        </div>
      </div>
      <Space />
    </>
  );
};

export default Header;
