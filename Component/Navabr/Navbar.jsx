import React from "react";
import HyperLink from "../HyperLink/HyperLink";
import Li from "../Li/Li";
import { css, cx } from "@emotion/css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul
        className={css`
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
        `}
      >
        <Link href={`/`}>
          <a>
            <Li>خانه</Li>
          </a>
        </Link>
        <Link href={`/courses`}>
          <a>
            <Li>دوره های آموزشی</Li>
          </a>
        </Link>
        <Link href={`/blogs`}>
          <a>
            <Li>بلاک ها</Li>
          </a>
        </Link>
        <Link href={`/about-us`}>
          <a>
            <Li>درباره ما</Li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
