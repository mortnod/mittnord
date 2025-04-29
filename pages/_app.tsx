import { AppProps } from 'next/app';
import { Router, useRouter } from 'next/router';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import { ThemeUIProvider } from 'theme-ui';

import { theme } from '../constants/theme';
import TypesafeI18n from '../src/i18n/i18n-react';
import { Locales } from '../src/i18n/i18n-types';
import { loadAllLocalesAsync } from '../src/i18n/i18n-util.async';

import GlobalStyles from './globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  // Start Posthog
  const router = useRouter();
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: '/ingest',
      ui_host: 'https://eu.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      // Enable debug mode in development
      loaded: (ph) => {
        if (process.env.NODE_ENV === 'development') ph.debug();
      },
    });

    const handleRouteChange = () => posthog?.capture('$pageview');

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  // End Posthog

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
      <PostHogProvider client={posthog}>
        <ThemeUIProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeUIProvider>
      </PostHogProvider>
    </TypesafeI18n>
  );
}

export default MyApp;
