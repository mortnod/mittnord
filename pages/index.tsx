/** @jsxImportSource theme-ui */
import Head from 'next/head';
import { useState } from 'react';

import Cards from '../components/cards/cards';
import Footer from '../components/footer/footer';
import GradientBar from '../components/gradientBar';
import setFavicon from '../components/head/setFavicon';
import Header from '../components/header/header';
import Main from '../components/layout/main';
import Wrap from '../components/layout/wrap';
import Settings from '../components/settings/settings';
import { captureEvent } from '../utils/analytics';

function IndexPage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = (elementLocation: string) => {
    setIsSettingsOpen(true);
    captureEvent('open_settings', { via: elementLocation });
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  setFavicon();

  return (
    <>
      <Head>
        <title>Mitt Nord</title>
      </Head>
      <Main>
        <GradientBar />
        <Wrap>
          <Header openSettings={() => openSettings('header')} />
          <Cards />
        </Wrap>
      </Main>
      <Footer openSettings={() => openSettings('footer')} />
      <Settings isOpen={isSettingsOpen} onClose={closeSettings} />
    </>
  );
}

export default IndexPage;
