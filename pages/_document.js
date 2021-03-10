import Document, { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

import OpenGraph from '../components/head/openGraph';
import AppIcons from '../components/head/appIcons';
import LoadFonts from '../components/head/loadFonts';
import InitializeGoogleTagManager from '../components/head/initializeGoogleTagManager';

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
          <LoadFonts />
          {/* Progressive Web App */}
          <link rel="manifest" href="/manifest.json" />
          <AppIcons />
          <OpenGraph />
          <InitializeGoogleTagManager />
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
