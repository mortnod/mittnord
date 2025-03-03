/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';

import { useI18nContext } from '../../../src/i18n/i18n-react';
import { Locales } from '../../../src/i18n/i18n-types';
import { event } from '../../../utils/gtag';
import Globe from '../../icons/globe';
import RadioCard from '../../radioCard/radioCard';
import RadioCardGroup from '../../radioCard/radioCardGroup';

const LanguageSelector = () => {
  const { locale, setLocale, LL } = useI18nContext();
  const router = useRouter();

  const changeLanguage = (newLocale: Locales) => {
    router.push('/', '/', { locale: newLocale });
    setLocale(newLocale);

    event({
      category: 'Language',
      action: `Set language: ${locale}`,
      label: 'Via settings',
    });
  };

  return (
    <RadioCardGroup legend={LL.LANGUAGE()} icon={<Globe />}>
      <RadioCard
        id="language-select-en"
        name="language-select"
        labelText="English"
        checked={locale === 'en'}
        onChange={() => changeLanguage('en')}
      />

      <RadioCard
        id="language-select-nb"
        name="language-select"
        labelText="Norsk"
        checked={locale === 'nb'}
        onChange={() => changeLanguage('nb')}
      />
    </RadioCardGroup>
  );
};

export default LanguageSelector;
