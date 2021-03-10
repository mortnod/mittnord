/** @jsx jsx */
import { jsx } from 'theme-ui';

import { i18n, withTranslation } from '../../i18n';
import { event } from '../../utils/gtag';
import isDarkTheme from '../../utils/isDarkTheme';
import Nord from '../icons/nord';
import Globe from '../icons/globe';
import PaintRoller from '../icons/paintRoller';
import Facebook from '../icons/facebook';
import Instagram from '../icons/instagram';
import Twitter from '../icons/twitter';
import Wrap from '../layout/wrap';

import SettingsButton from './settingsButton';
import Social from './social';

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
              alignItems: 'center',
              flexDirection: ['column', null, null, 'row'],
            }}
          >
            <a
              href={t('nord-href')}
              rel="noreferrer noopener"
              target="_blank"
              onClick={() =>
                event({ category: 'Other', action: 'Go to nord.no' })
              }
              sx={{
                fontSize: '128px',
                lineHeight: '0',
                color: 'icon',
                mb: [8, null, null, 0],
                outline: 'none',
                borderRadius: 2,

                '&.focus-visible': {
                  boxShadow: 'outline',
                },

                ':hover': {
                  color: 'iconHover',
                },
              }}
            >
              <Nord variant="solid" color="currentColor" />
            </a>
            <div
              sx={{
                ml: [0, null, null, 10],
                mb: [8, null, null, 0],
                display: 'flex',
              }}
            >
              <Social
                href="https://www.facebook.com/Norduniversitet"
                styles={{ ml: [0, null, null, 3] }}
                icon={<Facebook />}
              >
                Facebook
              </Social>
              <Social
                href="https://twitter.com/Norduniversitet"
                icon={<Twitter />}
              >
                Twitter
              </Social>
              <Social
                href="http://instagram.com/Norduniversitet"
                icon={<Instagram />}
              >
                Instagram
              </Social>
            </div>
            <a
              href={t('privacy-href')}
              sx={{
                color: 'icon',
                fontSize: 'lg',
                textDecoration: 'none',
                fontWeight: '500',
                ml: [0, null, null, 6],
                mb: [5, null, null, 0],
                outline: 'none',
                borderRadius: 'full',
                px: 4,
                py: 2,

                '&.focus-visible': {
                  boxShadow: 'outline',
                },

                ':hover': {
                  color: 'iconHover',
                  bg: isDarkTheme() ? 'border' : 'rgba(0,0,0,0.03)',
                },
              }}
            >
              {t('Privacy')}
            </a>
          </div>
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
