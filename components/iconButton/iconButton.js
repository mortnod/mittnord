/** @jsx jsx */
import { jsx } from 'theme-ui';
import ScreenReaderOnly from '../screenReaderOnly/screenReaderOnly';

const IconButton = ({ children, styles, icon, iconStyles, size, ...rest }) => (
  <button
    type="button"
    sx={{
      border: 'none',
      bg: 'transparent',
      p: 3,
      fontFamily: 'sans',
      fontWeight: '500',
      fontSize: 'lg',
      color: 'icon',
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 'none',
      borderRadius: 'full',
      width: '36px',
      height: '36px',

      ':focus': {
        boxShadow: 'outline',
      },

      ':hover': {
        bg: 'border',
      },

      ...styles,
    }}
    {...rest}
  >
    <ScreenReaderOnly>{children}</ScreenReaderOnly>
    <div
      sx={{
        fontSize: 'md',
        display: 'flex',
        alignItems: 'center',

        ...iconStyles,
      }}
    >
      {icon}
    </div>
  </button>
);

export default IconButton;
