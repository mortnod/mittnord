import Document, { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

import OpenGraph from '../components/meta/openGraph';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      // eslint-disable-next-line no-underscore-dangle
      <Html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          {/* Azo Sans via Adobe Fonts */}
          <link rel="stylesheet" href="https://use.typekit.net/gie0gbo.css" />

          {/* Progressive Web App */}
          <link rel="manifest" href="/manifest.json" />
          <OpenGraph />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
