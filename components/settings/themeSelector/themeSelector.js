/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

import { withTranslation } from '../../../i18n';
import { colorModes } from '../../../constants/theme';
import RadioCard from '../../radioCard/radioCard';
import RadioCardGroup from '../../radioCard/radioCardGroup';
import PaintRoller from '../../icons/paintRoller';
import ThemePreview from './themePreview';

const ThemeSelector = ({ t }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <RadioCardGroup legend={t('Theme')} icon={<PaintRoller />}>
      {colorModes.map((mode) => (
        <RadioCard
          id={`theme-select-${mode}`}
          name="theme-select"
          labelText={t(mode)}
          key={mode}
          checked={colorMode === mode}
          onChange={() => setColorMode(mode)}
        >
          <ThemePreview colorMode={mode} />
        </RadioCard>
      ))}
    </RadioCardGroup>
  );
};

export default withTranslation('common')(ThemeSelector);
