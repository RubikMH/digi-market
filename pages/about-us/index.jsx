import React from "react";
import { css, cx } from "@emotion/css";

import H1 from "../../Component/Typography/H1";

const about = () => {
  return (
    <div
      className={css`
        display: flex;
        width: 100%;
      `}
    >
      <H1>about-us</H1>
    </div>
  );
};

export default about;
