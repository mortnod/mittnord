import { useThemeUI } from 'theme-ui';

import { DEFAULT_COLOR_MODE } from '../constants/theme';

// If a colorMode is sent in as a param, it will return the
// colors for that colorMode. If no params are sent in,
// the currently selected themes color is returned.
const getThemeColors = (colorMode) => {
  const { theme, colorMode: selectedColorMode } = useThemeUI();

  if (colorMode) {
    return theme.rawColors.modes[colorMode];
  }

  return selectedColorMode === DEFAULT_COLOR_MODE
    ? theme.rawColors
    : theme.rawColors.modes[selectedColorMode];
};

export default getThemeColors;
