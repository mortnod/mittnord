import { useThemeUI } from 'theme-ui';

import { DEFAULT_COLOR_MODE } from '../constants/theme';

const getThemeColors = () => {
  const { theme, colorMode } = useThemeUI();

  return colorMode === DEFAULT_COLOR_MODE
    ? theme.colors
    : theme.colors.modes[colorMode];
};

export default getThemeColors;
