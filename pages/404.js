/** @jsx jsx */
import { jsx } from 'theme-ui';

import { withTranslation } from '../i18n';

function Custom404({ t }) {
  return (
    <div
      sx={{
        color: 'heading',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>{t('404 - Page Not Found')}</h1>
      <a href="/" sx={{ color: 'icon', mt: '2' }}>
        {t('Go to frontpage')}
      </a>
    </div>
  );
}

export default withTranslation('common')(Custom404);
