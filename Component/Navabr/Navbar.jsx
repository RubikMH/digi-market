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
          <a
            className={css`
              text-decoration: none;
              color: black;
              cursor: pointer;
            `}
          >
            <Li>خانه</Li>
          </a>
        </Link>
        <Link href={`/Courses`}>
          <a
            className={css`
              text-decoration: none;
              color: black;
              cursor: pointer;
            `}
          >
            <Li>دوره های آموزشی</Li>
          </a>
        </Link>
        <Link href={`/blogs`}>
          <a
            className={css`
              text-decoration: none;
              color: black;
              cursor: pointer;
            `}
          >
            <Li>بلاک ها</Li>
          </a>
        </Link>
        <Link href={`/about-us`}>
          <a
            className={css`
              text-decoration: none;
              color: black;
              cursor: pointer;
            `}
          >
            <Li>درباره ما</Li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
