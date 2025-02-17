import { ColorMode, useTheme } from '../constants/theme';

const isDarkTheme = (colorMode?: ColorMode) => {
  const darkThemes = ['aurora', 'dusk'];

  if (colorMode) {
    return darkThemes.includes(colorMode);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { colorMode: selectedColorMode } = useTheme();
  return darkThemes.includes(selectedColorMode as ColorMode);
};

export default isDarkTheme;
