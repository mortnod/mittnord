/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';

import Cards from '../components/cards/cards';
import GradientBar from '../components/gradientBar';
import Header from '../components/header/header';
import Footer from '../components/layout/footer';
import Wrap from '../components/layout/wrap';
import Main from '../components/layout/main';
import Settings from '../components/settings/settings';

function IndexPage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <>
      <Main>
        <GradientBar />
        <Wrap>
          <Header />
          <Cards />
        </Wrap>
      </Main>
      <Footer openSettings={openSettings} />
      <Settings isOpen={isSettingsOpen} onClose={closeSettings} />
    </>
  );
}

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default IndexPage;
