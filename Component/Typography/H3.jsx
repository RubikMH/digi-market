import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";

const H3 = ({ children, align = "right" }) => {
  const theme = useTheme();
  return (
    <h3
      className={css`
        text-align: ${align};
        margin: ${theme.typography.h3.margin};
        font-weight: ${theme.typography.h3.fontWeight};
        line-height: ${theme.typography.h3.lineHeight};
        margin-top: ${theme.typography.h3.marginTop};
        font-size: ${theme.typography.h3.fontSize}rem;
      `}
    >
      {children}
    </h3>
  );
};

export default H3;
