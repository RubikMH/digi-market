import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";

const H6 = ({ children, align = "right" }) => {
  const theme = useTheme();
  return (
    <h5
      className={css`
        text-align: ${align};
        margin: ${theme.typography.h5.margin};
        font-weight: ${theme.typography.h5.fontWeight};
        line-height: ${theme.typography.h5.lineHeight};
        margin-top: ${theme.typography.h5.marginTop};
        font-size: ${theme.typography.h5.fontSize}rem;
      `}
    >
      {children}
    </h5>
  );
};

export default H6;
