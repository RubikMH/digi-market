import React from "react";
import HyperLink from "../HyperLink/HyperLink";
import Li from "../Li/Li";
import { css, cx } from "@emotion/css";

const Navbar = () => {
  return (
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
        <HyperLink href={`/`}>
          <Li>خانه</Li>
        </HyperLink>
        <HyperLink href={`/courses`}>
          <Li>دوره های آموزشی</Li>
        </HyperLink>
        <HyperLink href={`/blogs`}>
          <Li>بلاک ها</Li>
        </HyperLink>
        <HyperLink href={`/about-us`}>
          <Li>درباره ما</Li>
        </HyperLink>
      </ul>
    </div>
  );
};
export default Navbar;
