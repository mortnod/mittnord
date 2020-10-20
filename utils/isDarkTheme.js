import { useThemeUI } from 'theme-ui';

const isDarkTheme = (colorMode) => {
  const darkThemes = ['aurora', 'dusk'];

  if (colorMode) {
    return darkThemes.includes(colorMode);
  }

  const { colorMode: selectedColorMode } = useThemeUI();
  return darkThemes.includes(selectedColorMode);
};

export default isDarkTheme;
