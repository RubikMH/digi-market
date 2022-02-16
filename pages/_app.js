import React from "react";
import App from "next/app";
import Layout from "../Component/Layout/index";
import { ThemeProvider } from "@emotion/react";
import Theme from "../configs/Theme";
import { Provider } from "react-redux";
import store from "../configs/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>{" "}
      </ThemeProvider>{" "}
    </Provider>
  );
}
MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store;
  const pageProps = await App.getInitialProps(appContext);
  // console.log(appContext);
  return {
    ...pageProps,
  };
};

export default MyApp;
