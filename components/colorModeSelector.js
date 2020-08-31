/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

import { colorModes } from '../constants/theme';

const ColorModeSelector = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <select value={colorMode} onChange={(e) => setColorMode(e.target.value)}>
      {colorModes.map((mode) => (
        <option value={mode} key={mode}>
          {mode}
        </option>
      ))}
    </select>
  );
};

export default ColorModeSelector;
