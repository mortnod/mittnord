/** @jsxImportSource theme-ui */
import { ThemeUICSSProperties } from 'theme-ui';

import ScreenReaderOnly from '../screenReaderOnly/screenReaderOnly';

type Props = {
  children?: React.ReactNode;
  styles: ThemeUICSSProperties;
  iconStyles: ThemeUICSSProperties;
  icon: React.ReactNode;
  onClick: () => void;
};

const IconButton = ({ children, styles, icon, iconStyles, ...rest }: Props) => (
  <button
    type="button"
    sx={{
      border: 'none',
      bg: 'transparent',
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
      flexShrink: 0,

      '&.focus-visible': {
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
