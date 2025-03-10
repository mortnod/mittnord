import withSerwistInit from '@serwist/next';
import type { NextConfig } from 'next';

const withSerwist = withSerwistInit({
  swSrc: 'components/sw.ts',
  swDest: 'public/sw.js',
});

const nextConfig: NextConfig = withSerwist({
  i18n: {
    locales: ['nb', 'en'],
    defaultLocale: 'nb',
    localeDetection: false,
  },
});

export default nextConfig;
