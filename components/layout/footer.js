/** @jsx jsx */
import { jsx } from 'theme-ui';

import { i18n, withTranslation } from '../../i18n';
import ColorModeSelector from '../colorModeSelector';
import Wrap from './wrap';
import Nord from '../icons/nord';

function Footer({ t }) {
  return (
    <div
      sx={{
        flexShrink: 0,
        borderTop: '1px solid',
        borderTopColor: 'border',
      }}
    >
      <Wrap>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div sx={{ fontSize: '128px', lineHeight: '0', color: 'icon' }}>
            <Nord variant="solid" color="currentColor" />
          </div>
          <div>
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
        </div>
      </Wrap>
    </div>
  );
}

export default withTranslation('common')(Footer);
