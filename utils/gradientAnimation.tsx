import { ColorKeys, ExactTheme } from '../constants/theme';

const variants = {
  BACKGROUND: 'background',
  TEXT: 'text',
} as const;

const sizes = {
  NORMAL: 'normal',
  LARGE: 'large',
} as const;

const clipToTextStyles = {
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitTextFillColor: 'transparent',
  color: 'black',
  display: 'inline-block',
};

type Props = {
  variant?: 'background' | 'text';
  size?: 'normal' | 'large';
  gradient1?: ColorKeys;
  gradient2?: ColorKeys;
};

export default function gradientAnimation({
  variant = variants.BACKGROUND,
  size = sizes.NORMAL,
  gradient1 = 'gradient1',
  gradient2 = 'gradient2',
}: Props = {}) {
  const backgroundSize = size === sizes.LARGE ? '400%' : '200%';
  const duration = size === sizes.LARGE ? '20s' : '10s';
  const variantStyles = variant === variants.TEXT ? clipToTextStyles : {};

  return {
    background: (theme: ExactTheme) =>
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
