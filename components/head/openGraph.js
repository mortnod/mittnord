/** @jsx jsx */
import { jsx } from 'theme-ui';

const OpenGraph = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      {/* Schema.org for Google */}
      <meta itemProp="name" content="Mitt Nord" />
      <meta itemProp="description" content="Startsiden for Nord-studenter" />
      <meta itemProp="image" content={`${url}/images/og.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mitt Nord" />
      <meta
        name="twitter:description"
        content="Startsiden for Nord-studenter"
      />
      <meta name="twitter:site" content="@MortenVN" />
      <meta name="twitter:creator" content="@MortenVN" />
      <meta name="twitter:image:src" content={`${url}/images/twitter.jpg`} />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta property="og:title" content="Mitt Nord" />
      <meta
        property="og:description"
        name="description"
        content="Startsiden for Nord-studenter"
      />
      <meta property="og:image" name="image" content={`${url}/images/og.jpg`} />
      <meta property="og:url" content="https://mittnord.vercel.com" />
      <meta property="og:site_name" content="Mitt Nord" />
      <meta property="og:locale" content="nb_NO" />
      <meta property="og:type" content="website" />
    </>
  );
};

export default OpenGraph;
