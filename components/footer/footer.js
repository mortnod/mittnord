/** @jsx jsx */
import { jsx } from 'theme-ui';

import { i18n, withTranslation } from '../../i18n';
import { event } from '../../utils/gtag';
import Globe from '../icons/globe';
import PaintRoller from '../icons/paintRoller';
import Wrap from '../layout/wrap';

import SettingsButton from './settingsButton';

function Footer({ t, openSettings }) {
  const handleLanguageClick = () => {
    const newLanguage = i18n.language === 'nb' ? 'en' : 'nb';
    i18n.changeLanguage(newLanguage);
    event({
      category: 'Language',
      action: `Set language: ${newLanguage}`,
      label: 'Via footer',
    });
  };

  return (
    <div
      sx={{
        flexShrink: 0,
        borderTop: '1px solid',
        borderTopColor: ['transparent', null, null, 'border'],
        mt: 10,
        mb: [10, null, 0],
      }}
    >
      <Wrap>
        <div
          sx={{
            display: 'flex',
            flexDirection: ['column', null, null, 'row'],
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: ['column', null, null, 'row'],
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <SettingsButton
              onClick={openSettings}
              icon={<PaintRoller />}
              sx={{
                mr: [null, null, null, 1],
                mb: [5, null, null, 0],
                ml: [0, null, null, 2],
              }}
            >
              {t('Change theme')}
            </SettingsButton>
            <SettingsButton
              icon={<Globe />}
              onClick={handleLanguageClick}
              sx={{ ml: [0, null, null, 2], mb: [6, null, null, 0] }}
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
