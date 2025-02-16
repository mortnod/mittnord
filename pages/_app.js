import { useEffect } from 'react';
import App from 'next/app';
import { useRouter } from 'next/router';
import { ThemeUIProvider } from 'theme-ui';
import 'focus-visible';

import theme from '../constants/theme';
import * as gtag from '../utils/gtag';

import GlobalStyles from './globalStyles';

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
    <ThemeUIProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;
