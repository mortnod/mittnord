/** @jsx jsx */
import { jsx } from 'theme-ui';
import Head from 'next/head';

import Cards from '../components/cards/cards';
import ColorModeSelector from '../components/colorModeSelector';
import NorthernLightsBar from '../components/northernLightsBar';
import Header from '../components/header/header';

export default function IndexPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NorthernLightsBar />
      <div
        sx={{
          mt: 8,
          mx: 'auto',
          p: [2, null, 3],
          maxWidth: ['100%', null, '630px', '840px', '1270px'],
        }}
      >
        <Header />
        <Cards />
        <ColorModeSelector />
      </div>
    </>
  );
}
