import React from "react";
import Link from "next/link";
import { css, cx } from "@emotion/css";

const HyperLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        className={css`
          text-decoration: none;
          cursor: pointer;
          border-bottom: 1px solid red;
        `}
      >
        {children}
      </a>
    </Link>
  );
};

export default HyperLink;
