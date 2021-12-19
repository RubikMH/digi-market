import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";

const H1 = ({ children, align = "right" }) => {
  const theme = useTheme();
  return (
    <h1
      className={css`
        text-align: ${align};
        margin: ${theme.typography.h1.margin};
        font-weight: ${theme.typography.h1.fontWeight};
        line-height: ${theme.typography.h1.lineHeight};
        margin-top: ${theme.typography.h1.marginTop};
        font-size: ${theme.typography.h1.fontSize}rem;
      `}
    >
      {children}
    </h1>
  );
};

export default H1;
