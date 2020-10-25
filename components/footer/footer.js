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
            <SettingsButton
              icon={<Globe />}
              sx={{ mr: '5' }}
              onClick={() =>
                i18n.changeLanguage(i18n.language === 'nb' ? 'en' : 'nb')
              }
            >
              {t('change-locale')}
            </SettingsButton>
            <SettingsButton onClick={openSettings} icon={<PaintRoller />}>
              {t('Change theme')}
            </SettingsButton>
          </div>
        </div>
      </Wrap>
    </div>
  );
}

export default withTranslation('common')(Footer);
