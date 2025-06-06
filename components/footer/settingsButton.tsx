/** @jsxImportSource theme-ui */
import { Theme, ThemeUIStyleObject } from 'theme-ui';

import isDarkTheme from '../../utils/isDarkTheme';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  icon: React.ReactNode;
  iconSx?: ThemeUIStyleObject<Theme> | undefined;
  sx?: ThemeUIStyleObject<Theme> | undefined;
};

const settingsButton = ({ children, icon, iconSx, ...rest }: Props) => (
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
      alignItems: 'center',
      outline: 'none',
      borderRadius: 'full',
      px: 4,
      py: 2,

      '&:focus-visible': {
        boxShadow: 'outline',
      },

      ':hover': {
        color: 'iconHover',
        bg: isDarkTheme() ? 'border' : 'rgba(0,0,0,0.03)',
      },
    }}
    {...rest}
  >
    <div
      sx={{
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        mr: children ? 2 : 0,
        color: 'muted',
        ...iconSx,
      }}
    >
      {icon}
    </div>
    {children}
  </button>
);

export default settingsButton;
