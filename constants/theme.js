import colors from './colors';

const breakpoints = [
  '480px', // 3 cards per column (fluid width)
  '640px', // 3 cards per column (fixes width)
  '850px', // 4 cards per column (fixed width)
  '1270px', // 6 cards per column (fixed width)
];

const space = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
  '80': '20rem',
  '96': '24rem',
  '112': '28rem',
  '128': '32rem',
  '160': '40rem',
  '192': '48rem',
  '224': '56rem',
  '256': '64rem',
  '320': '80rem',
  '384': '96rem',
  // Measure: Limit line length for readability
  'measure-narrow': '24em',
  measure: '30em',
  'measure-wide': '34em',
  // Percentage
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  '1/1': '100%',
};

const fonts = {
  sans:
    '"azo-sans-web", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

const shadows = {
  '0': 'none',
  '1': '0 0 0 1px rgba(0, 0, 0, 0.05)',
  '2': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  '3': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.15)', // Modifisert Tailwind
  '4': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '5':
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '6':
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '7': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
};

const radii = {
  '0': '0',
  '1': '0.125rem',
  '2': '0.25rem',
  '3': '0.375rem',
  '4': '0.5rem',
  '5': '0.125rem',
  full: '9999px',
};

const letterSpacings = {
  tightest: '-0.05em',
  tighter: '-0.025em',
  tight: '-0.0125em',
  normal: 'normal',
  wide: '0.02em',
  wider: '0.125em',
  widest: '0.25em',
};

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '22px',
  xl: '28px',
};

export default {
  breakpoints,
  space,
  sizes: space,
  fonts,
  fontSizes,
  letterSpacings,
  colors,
  radii,
  shadows,
  styles: {
    root: {
      fontFamily: 'sans',
      '*': {
        margin: 0,
        padding: 0,
      },
    },
  },
};

export const colorModes = Object.keys(colors.modes);
export const DEFAULT_COLOR_MODE = 'default';
