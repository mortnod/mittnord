/** @jsx jsx */
import { jsx } from 'theme-ui';

import { event } from '../../../utils/gtag';
import RadioCard from '../../radioCard/radioCard';
import RadioCardGroup from '../../radioCard/radioCardGroup';
import Globe from '../../icons/globe';

const LanguageSelector = () => {
  const handleChange = (language) => {
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
