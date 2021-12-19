import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";

const H2 = ({ children, align = "right" }) => {
  const theme = useTheme();
  return (
    <h2
      className={css`
        text-align: ${align};
        margin: ${theme.typography.h2.margin};
        font-weight: ${theme.typography.h2.fontWeight};
        line-height: ${theme.typography.h2.lineHeight};
        margin-top: ${theme.typography.h2.marginTop};
        font-size: ${theme.typography.h2.fontSize}rem;
      `}
    >
      {children}
    </h2>
  );
};

export default H2;
