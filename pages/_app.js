import App from 'next/app';
import { ThemeProvider } from 'theme-ui';
import 'focus-visible';

import { appWithTranslation } from '../i18n';
import theme from '../constants/theme';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
