import Document, { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

import AppIcons from '../components/head/appIcons';
import LoadFonts from '../components/head/loadFonts';
import OpenGraph from '../components/head/openGraph';

export default class extends Document {
  render() {
    return (
      // eslint-disable-next-line no-underscore-dangle
      <Html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
        <Head>
          <link rel="icon" id="favicon" href="/favicon.ico" />
          <LoadFonts />
          {/* Progressive Web App */}
          <link rel="manifest" href="/manifest.json" />
          <AppIcons />
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
