/** @jsxImportSource theme-ui */

import { event } from '../../../utils/gtag';
import Globe from '../../icons/globe';
import RadioCard from '../../radioCard/radioCard';
import RadioCardGroup from '../../radioCard/radioCardGroup';

const LanguageSelector = () => {
  const handleChange = (language: 'en' | 'nb') => {
    event({
      category: 'Language',
      action: `Set language: ${language}`,
      label: 'Via settings',
    });
    // i18n.changeLanguage(language);
  };

  return (
    <RadioCardGroup legend="Language" icon={<Globe />}>
      <RadioCard
        id="language-select-en"
        name="language-select"
        labelText="English"
        // checked={i18n.language === 'en'}
        onChange={() => handleChange('en')}
      />

      <RadioCard
        id="language-select-nr"
        name="language-select"
        labelText="Norsk"
        // checked={i18n.language === 'nb'}
        onChange={() => handleChange('nb')}
      />
    </RadioCardGroup>
  );
};

export default LanguageSelector;
