import React from "react";
import App from "next/app";
// import { ThemeProvider } from "emotion-theming";
import { Provider } from "react-redux";
import Theme from "../configs/theme";
import createMyStore from "../configs/store";
import Layout from "../Component/Layout";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";

const store = createMyStore();

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <>
        <ThemeProvider theme={Theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    </Provider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store;

  const pageProps = await App.getInitialProps(appContext);

  return {
    ...pageProps,
  };
};

export default MyApp;
