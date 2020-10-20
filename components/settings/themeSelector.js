/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

import { withTranslation } from '../../i18n';
import { colorModes } from '../../constants/theme';
import RadioCard from '../radioCard/radioCard';
import RadioCardGroup from '../radioCard/radioCardGroup';

const ThemeSelector = ({ t }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <RadioCardGroup legend={t('Theme')}>
      {colorModes.map((mode) => (
        <RadioCard
          id={`theme-select-${mode}`}
          name="theme-select"
          labelText={t(mode)}
          key={mode}
          checked={colorMode === mode}
          onChange={() => setColorMode(mode)}
        />
      ))}
    </RadioCardGroup>
  );
};

export default withTranslation('common')(ThemeSelector);
