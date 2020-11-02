import { useEffect } from 'react';
import App from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'theme-ui';
import 'focus-visible';

import { appWithTranslation } from '../i18n';
import theme from '../constants/theme';
import * as gtag from '../utils/gtag';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  // Start Google Analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  // End Google Analytics

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
