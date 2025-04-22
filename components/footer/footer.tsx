/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';

import { useI18nContext } from '../../src/i18n/i18n-react';
import { captureEvent } from '../../utils/analytics';
import About from '../about/AboutModal';
import Globe from '../icons/globe';
import PaintRoller from '../icons/paintRoller';
import Wrap from '../layout/wrap';

import SettingsButton from './settingsButton';

type Props = {
  openSettings: () => void;
};

function Footer({ openSettings }: Props) {
  const { LL, locale, setLocale } = useI18nContext();
  const router = useRouter();

  const changeLanguage = () => {
    const newLocale = locale === 'nb' ? 'en' : 'nb';

    router.push('/', '/', { locale: newLocale });
    setLocale(newLocale);

    captureEvent('Language_change', { language: newLocale });
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
              {LL.CHANGE_THEME()}
            </SettingsButton>
            <SettingsButton
              icon={<Globe />}
              onClick={changeLanguage}
              sx={{ ml: [0, null, null, 2], mb: [6, null, null, 0] }}
            >
              {locale === 'nb' ? LL.ENGLISH() : LL.NORWEGIAN()}
            </SettingsButton>
          </div>
          <About />
        </div>
      </Wrap>
    </div>
  );
}

export default Footer;
