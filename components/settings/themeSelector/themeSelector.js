/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

import { event } from '../../../utils/gtag';
import { colorModes } from '../../../constants/theme';
import RadioCard from '../../radioCard/radioCard';
import RadioCardGroup from '../../radioCard/radioCardGroup';
import PaintRoller from '../../icons/paintRoller';
import ThemePreview from './themePreview';

const ThemeSelector = () => {
  const [colorMode, setColorMode] = useColorMode();

  const handleChange = (mode) => {
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
          onChange={() => handleChange(mode)}
        >
          <ThemePreview colorMode={mode} />
        </RadioCard>
      ))}
    </RadioCardGroup>
  );
};

export default ThemeSelector;
