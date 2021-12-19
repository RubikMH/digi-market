import React from "react";
import { css, cx } from "@emotion/css";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "../configs/Theme";
import Reset from "../Containers/Reset/Reset";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((storyFn) => (
  <ThemeProvider theme={Theme}>
    <div
      className={css`
        display: flex;
        margin: 20px auto;
      `}
    >
      <Reset />
      {storyFn()}
    </div>
  </ThemeProvider>
));
