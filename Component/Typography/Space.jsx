import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";

const Space = () => {
  const theme = useTheme();
  return (
    <div
      className={css`
        width: 100%;
        height: ${theme.spaces[4]};
      `}
    />
  );
};

export default Space;
