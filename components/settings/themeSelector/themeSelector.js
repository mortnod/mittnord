/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

import { withTranslation } from '../../../i18n';
import { event } from '../../../utils/gtag';
import { colorModes } from '../../../constants/theme';
import RadioCard from '../../radioCard/radioCard';
import RadioCardGroup from '../../radioCard/radioCardGroup';
import PaintRoller from '../../icons/paintRoller';
import ThemePreview from './themePreview';

const ThemeSelector = ({ t }) => {
  const [colorMode, setColorMode] = useColorMode();

  const handleChange = (mode) => {
    event({ category: 'Theme', action: `Set theme: ${mode}` });
    setColorMode(mode);
  };

  return (
    <RadioCardGroup legend={t('Theme')} icon={<PaintRoller />}>
      {colorModes.map((mode) => (
        <RadioCard
          id={`theme-select-${mode}`}
          name="theme-select"
          labelText={t(mode)}
          key={mode}
          checked={colorMode === mode}
          onChange={() => handleChange(mode)}
        >
          <ThemePreview colorMode={mode} />
        </RadioCard>
      ))}
    </RadioCardGroup>
  );
};

export default withTranslation('common')(ThemeSelector);
