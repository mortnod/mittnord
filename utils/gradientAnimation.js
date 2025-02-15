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

export default function gradientAnimation({
  variant = variants.BACKGROUND,
  size = sizes.NORMAL,
  gradient1 = 'gradient1',
  gradient2 = 'gradient2',
} = {}) {
  const backgroundSize = size === sizes.LARGE ? '400%' : '200%';
  const duration = size === sizes.LARGE ? '20s' : '10s';
  const variantStyles = variant === variants.TEXT ? clipToTextStyles : {};

  return {
    background: (theme) =>
      `linear-gradient(45deg, ${theme.colors[gradient1]} 20%, ${theme.colors[gradient2]} 40%, ${theme.colors[gradient2]} 60%, ${theme.colors[gradient1]} 80%)`,
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
