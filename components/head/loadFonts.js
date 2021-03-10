/** @jsx jsx */
import { jsx } from 'theme-ui';

const LoadFonts = () => {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/azo-sans-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/azo-sans-500.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/azo-sans-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default LoadFonts;
