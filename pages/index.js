/** @jsx jsx */
import { jsx } from 'theme-ui';

import Cards from '../components/cards/cards';
import GradientBar from '../components/gradientBar';
import Header from '../components/header/header';
import Footer from '../components/layout/footer';
import Wrap from '../components/layout/wrap';
import Main from '../components/layout/main';

function IndexPage() {
  return (
    <>
      <Main>
        <GradientBar />
        <Wrap>
          <Header />
          <Cards />
        </Wrap>
      </Main>
      <Footer />
    </>
  );
}

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default IndexPage;
