/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';

import { ColorMode, colorModes } from '../../../constants/theme';
import { useI18nContext } from '../../../src/i18n/i18n-react';
import { captureEvent } from '../../../utils/analytics';
import PaintRoller from '../../icons/paintRoller';
import RadioCard from '../../radioCard/radioCard';
import RadioCardGroup from '../../radioCard/radioCardGroup';

import ThemePreview from './themePreview';

const ThemeSelector = () => {
  const [colorMode, setColorMode] = useColorMode<ColorMode>();
  const { LL } = useI18nContext();

  const handleChange = (mode: ColorMode) => {
    captureEvent('theme_change', { theme: mode });
    setColorMode(mode);
  };

  return (
    <RadioCardGroup legend={LL.THEME()} icon={<PaintRoller />}>
      {colorModes.map((mode) => (
        <RadioCard
          id={`theme-select-${mode}`}
          name="theme-select"
          labelText={LL[mode as ColorMode]()}
          key={mode}
          checked={colorMode === mode}
          onChange={() => handleChange(mode as ColorMode)}
        >
          <ThemePreview colorMode={mode as ColorMode} />
        </RadioCard>
      ))}
    </RadioCardGroup>
  );
};

export default ThemeSelector;
