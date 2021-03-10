/** @jsx jsx */
import { jsx } from 'theme-ui';
import ScreenReaderOnly from '../screenReaderOnly/screenReaderOnly';

const Social = ({ children, href, styles, icon }) => (
  <a
    href={href}
    sx={{
      fontSize: '28px',
      display: 'flex',
      ml: '3',
      color: 'icon',
      lineHeight: 1,
      mt: 1,
      outline: 'none',
      borderRadius: 1,

      '&.focus-visible': {
        boxShadow: 'outline',
      },

      ':hover': {
        color: 'iconHover',
      },

      ...styles,
    }}
  >
    {icon}
    <ScreenReaderOnly>{children}</ScreenReaderOnly>
  </a>
);

export default Social;
