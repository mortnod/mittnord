import getThemeColors from './getThemeColors';

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

export function gradientAnimation({
  variant = variants.BACKGROUND,
  size = sizes.NORMAL,
  colorMode = undefined,
} = {}) {
  const colors = getThemeColors(colorMode);
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

/* 
USAGE: 
<svg sx={{ fill: 'url(#some-id')}}>
  <defs>{svgGradientAnimation('some-id')}</defs>
...
</svg>
*/
export function svgGradientAnimation(id) {
  const colors = getThemeColors();
  if (!colors) return {}; // Will not be available on server-side

  const color1 = colors.gradient1;
  const color2 = colors.gradient2;

  return (
    <linearGradient id={id} x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stopColor={color1}>
        <animate
          attributeName="stop-color"
          values={`${color2};${color1};${color2}`}
          dur="12s"
          repeatCount="indefinite"
        />
      </stop>
      <stop offset="0.5" stopColor={color2}>
        <animate
          attributeName="stop-color"
          values={`${color1};${color2};${color1};${color1}`}
          dur="7s"
          repeatCount="indefinite"
        />
      </stop>
      <stop offset="1" stopColor={color2}>
        <animate
          attributeName="stop-color"
          values={`${color1};${color2};${color1}`}
          dur="9s"
          repeatCount="indefinite"
        />
      </stop>
    </linearGradient>
  );
}
