import Document, { Html, Head, Main, NextScript } from "next/document";
import Reset from "../Containers/Reset/Reset";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
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
