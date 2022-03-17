import React from "react";
import HyperLink from "../HyperLink/HyperLink";
import Li from "../Li/Li";
import { css, cx } from "@emotion/css";
import Link from "next/link";
import styles from "./Navbar.module.css";

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
            <li className={styles.li_nav}>خانه</li>
          </a>
        </Link>
        <Link href={`/courses`}>
          <a
            className={css`
              text-decoration: none;
              color: black;
              cursor: pointer;
            `}
          >
            <li className={styles.li_nav}>دوره های آموزشی</li>
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
            <li className={styles.li_nav}>بلاک ها</li>
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
            <li className={styles.li_nav}>درباره ما</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
