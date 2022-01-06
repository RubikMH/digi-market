import React from "react";
import Link from "next/link";
import { css, cx } from "@emotion/css";

const HyperLink = ({ href, children, borderBottom }) => {
  return (
    <Link href={href}>
      <a
        className={css`
          text-decoration: none;
          cursor: pointer;
          border-bottom: ${borderBottom ? "1px solid red" : "0"};
        `}
      >
        {children}
      </a>
    </Link>
  );
};

export default HyperLink;
