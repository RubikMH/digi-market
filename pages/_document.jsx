import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Reset from "../Containers/Reset/Reset";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });
    // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Reset />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
