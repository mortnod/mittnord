/** @jsx jsx */
import { jsx } from 'theme-ui';

import { i18n, withTranslation } from '../../../i18n';
import RadioCard from '../../radioCard/radioCard';
import RadioCardGroup from '../../radioCard/radioCardGroup';

const LanguageSelector = ({ t }) => {
  return (
    <RadioCardGroup legend={t('Language')}>
      <RadioCard
        id="language-select-en"
        name="language-select"
        labelText="English"
        checked={i18n.language === 'en'}
        onChange={() => {
          i18n.changeLanguage('en');
        }}
      />

      <RadioCard
        id="language-select-nr"
        name="language-select"
        labelText="Norsk"
        checked={i18n.language === 'nb'}
        onChange={() => {
          i18n.changeLanguage('nb');
        }}
      />
    </RadioCardGroup>
  );
};

export default withTranslation('common')(LanguageSelector);
