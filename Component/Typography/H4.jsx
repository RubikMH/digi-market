import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";

const H4 = ({ children, align = "right" }) => {
  const theme = useTheme();
  return (
    <h4
      className={css`
        text-align: ${align};
        margin: ${theme.typography.h4.margin};
        font-weight: ${theme.typography.h4.fontWeight};
        line-height: ${theme.typography.h4.lineHeight};
        margin-top: ${theme.typography.h4.marginTop};
        font-size: ${theme.typography.h4.fontSize}rem;
      `}
    >
      {children}
    </h4>
  );
};

export default H4;
