import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ThemeUIProvider } from 'theme-ui';
import 'focus-visible';

import { theme } from '../constants/theme';
import TypesafeI18n from '../src/i18n/i18n-react';
import { Locales } from '../src/i18n/i18n-types';
import { loadAllLocalesAsync } from '../src/i18n/i18n-util.async';
import * as gtag from '../utils/gtag';

import GlobalStyles from './globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  // Start Google Analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  // End Google Analytics

  const locale = router.locale as Locales;
  const [localesLoaded, setLocalesLoaded] = useState(false);
  useEffect(() => {
    loadAllLocalesAsync().then(() => setLocalesLoaded(true));
  }, []);

  if (!localesLoaded) {
    return null;
  }

  return (
    <TypesafeI18n locale={locale}>
      <ThemeUIProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeUIProvider>
    </TypesafeI18n>
  );
}

export default MyApp;
