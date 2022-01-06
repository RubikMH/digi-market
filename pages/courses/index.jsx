import React from "react";
import { css, cx } from "@emotion/css";

import H1 from "../../Component/Typography/H1";

const courses = () => {
  return (
    <div
      className={css`
        display: flex;
        width: 100%;
      `}
    >
      <H1>courses</H1>
    </div>
  );
};

export default courses;
