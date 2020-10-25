/** @jsx jsx */
import { jsx } from 'theme-ui';

import { i18n, withTranslation } from '../../i18n';
import Nord from '../icons/nord';
import Globe from '../icons/globe';
import PaintRoller from '../icons/paintRoller';
import Wrap from '../layout/wrap';
import SettingsButton from './settingsButton';

function Footer({ t, openSettings }) {
  return (
    <div
      sx={{
        flexShrink: 0,
        borderTop: '1px solid',
        borderTopColor: ['transparent', null, 'border'],
        mt: 10,
        mb: [10, null, 0],
      }}
    >
      <Wrap>
        <div
          sx={{
            display: 'flex',
            flexDirection: ['column', null, 'row'],
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            sx={{
              fontSize: '128px',
              lineHeight: '0',
              color: 'icon',
              mb: [8, null, 0],
            }}
          >
            <Nord variant="solid" color="currentColor" />
          </div>
          <div
            sx={{
              display: 'flex',
              flexDirection: ['column', null, 'row'],
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <SettingsButton
              onClick={openSettings}
              icon={<PaintRoller />}
              sx={{ mr: [null, null, 5], mb: [5, null, 0] }}
            >
              {t('Change theme')}
            </SettingsButton>
            <SettingsButton
              icon={<Globe />}
              onClick={() =>
                i18n.changeLanguage(i18n.language === 'nb' ? 'en' : 'nb')
              }
            >
              {t('change-locale')}
            </SettingsButton>
          </div>
        </div>
      </Wrap>
    </div>
  );
}

export default withTranslation('common')(Footer);
