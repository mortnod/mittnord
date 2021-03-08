/** @jsx jsx */
import { jsx } from 'theme-ui';
import isDarkTheme from '../../utils/isDarkTheme';

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
    <div
      sx={{
        fontSize: 'md',
        display: 'flex',
        alignItems: 'center',
        mr: children ? 2 : 0,
        color: isDarkTheme() ? 'icon' : 'muted',
        ...iconStyles,
      }}
    >
      {icon}
    </div>
    {children}
  </button>
);

export default IconButton;
