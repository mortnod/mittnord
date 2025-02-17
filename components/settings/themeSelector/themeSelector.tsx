/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';

import { ColorMode, colorModes } from '../../../constants/theme';
import { event } from '../../../utils/gtag';
import PaintRoller from '../../icons/paintRoller';
import RadioCard from '../../radioCard/radioCard';
import RadioCardGroup from '../../radioCard/radioCardGroup';

import ThemePreview from './themePreview';

const ThemeSelector = () => {
  const [colorMode, setColorMode] = useColorMode<ColorMode>();

  const handleChange = (mode: ColorMode) => {
    event({ category: 'Theme', action: `Set theme: ${mode}` });
    setColorMode(mode);
  };

  return (
    <RadioCardGroup legend="Theme" icon={<PaintRoller />}>
      {colorModes.map((mode) => (
        <RadioCard
          id={`theme-select-${mode}`}
          name="theme-select"
          labelText={mode}
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
