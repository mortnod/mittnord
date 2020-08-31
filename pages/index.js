/** @jsx jsx */
import { jsx } from 'theme-ui';
import Head from 'next/head';

import Cards from '../components/cards';
import ColorModeSelector from '../components/colorModeSelector';

export default function IndexPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        sx={{
          mt: 20,
          mx: 'auto',
          p: [2, null, 3],
          maxWidth: ['100%', null, '630px', '840px', '1270px'],
        }}
      >
        <Cards />
        <ColorModeSelector />
      </div>
    </>
  );
}
