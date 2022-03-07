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

// static async getInitialProps({ Component, ctx}) {
//   return {
//   pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx): {}
//    };
//   }

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store;

  const pageProps = await App.getInitialProps(appContext);
  // console.log("App", App);

  return {
    ...pageProps,
  };
};

export default MyApp;
