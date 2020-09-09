/** @jsx jsx */
import { jsx } from 'theme-ui';

import { withTranslation } from '../../i18n';
import { gradientAnimation } from '../../utils/gradientAnimation';

function Brand({ t }) {
  return (
    <h2
      sx={{
        color: 'heading',
        letterSpacing: 'wider',
        fontWeight: 'bold',
        fontSize: ['lg', null, 'xl'],
        lineHeight: 1,
      }}
    >
      {t('MY')}
      <br />
      <span sx={{ ...gradientAnimation('text') }}>NORD</span>
    </h2>
  );
}

export default withTranslation('common')(Brand);
