import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#039be5" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/images/icons/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/icons/apple-touch-icon-180x180.png"
          />
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
