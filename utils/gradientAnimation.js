import { useThemeUI } from 'theme-ui';

import { DEFAULT_COLOR_MODE } from '../constants/theme';

const variants = {
  BACKGROUND: 'background',
  TEXT: 'text',
};

const sizes = {
  NORMAL: 'normal',
  LARGE: 'large',
};

const clipToTextStyles = {
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitTextFillColor: 'transparent',
  color: 'black',
  display: 'inline-block',
};

export default function gradientAnimation(
  variant = variants.BACKGROUND,
  size = sizes.NORMAL
) {
  const { theme, colorMode } = useThemeUI();

  const colors =
    colorMode === DEFAULT_COLOR_MODE
      ? theme.colors
      : theme.colors.modes[colorMode];
  if (!colors) return {}; // Will not be available on server-side

  const color1 = colors.gradient1;
  const color2 = colors.gradient2;
  const backgroundSize = size === sizes.LARGE ? '400%' : '200%';
  const duration = size === sizes.LARGE ? '20s' : '10s';
  const variantStyles = variant === variants.TEXT ? clipToTextStyles : {};

  return {
    background: `linear-gradient(45deg, ${color1} 20%, ${color2} 40%, ${color2} 60%, ${color1} 80%)`,
    backgroundSize: `${backgroundSize} auto`,
    animation: `aurora ${duration} linear infinite`,
    '@keyframes aurora': {
      to: {
        backgroundPosition: `${backgroundSize} center`,
      },
    },
    color: 'background',
    ...variantStyles,
  };
}
