/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import Head from 'next/head';

import { withTranslation } from '../i18n';
import { event } from '../utils/gtag';
import { LanguageContext } from '../utils/languageContext';
import getInitialLanguage from '../utils/getInitialLanguage';
import Cards from '../components/cards/cards';
import GradientBar from '../components/gradientBar';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Wrap from '../components/layout/wrap';
import Main from '../components/layout/main';
import Settings from '../components/settings/settings';
import setFavicon from '../components/head/setFavicon';

function IndexPage({ language }) {
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
    <LanguageContext.Provider value={language}>
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
    </LanguageContext.Provider>
  );
}

IndexPage.getInitialProps = async ({ req, res }) => {
  const language = getInitialLanguage(req, res);

  return {
    namespacesRequired: ['common'],
    language,
  };
};

export default withTranslation('common')(IndexPage);
