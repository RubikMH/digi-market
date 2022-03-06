import React from "react";
import Header from "./Header";
import { css, cx } from "@emotion/css";

export default function index({ children }) {
  return (
    <>
      <header
        className={css`
          position: sticky;
          top: 0;
          background-color: white;
          z-index: 5;
        `}
      >
        <Header />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
