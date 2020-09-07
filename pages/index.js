/** @jsx jsx */
import { jsx } from 'theme-ui';

import { i18n, withTranslation } from '../i18n';
import Cards from '../components/cards/cards';
import ColorModeSelector from '../components/colorModeSelector';
import GradientBar from '../components/gradientBar';
import Header from '../components/header/header';

function IndexPage({ t }) {
  return (
    <>
      <GradientBar />
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
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'nb' ? 'en' : 'nb')
          }
        >
          {t('change-locale')}
        </button>
      </div>
    </>
  );
}

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(IndexPage);
