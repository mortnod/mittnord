/** @jsxImportSource theme-ui */
import { useState } from 'react';
import Head from 'next/head';

import { event } from '../utils/gtag';
import Cards from '../components/cards/cards';
import GradientBar from '../components/gradientBar';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Wrap from '../components/layout/wrap';
import Main from '../components/layout/main';
import Settings from '../components/settings/settings';
import setFavicon from '../components/head/setFavicon';

function IndexPage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = (elementLocation) => {
    setIsSettingsOpen(true);
    event({
      category: 'Other',
      action: 'Open settings',
      label: `Via ${elementLocation}`,
    });
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
