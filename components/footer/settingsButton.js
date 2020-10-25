/** @jsx jsx */
import { jsx } from 'theme-ui';

const settingsButton = ({ children, icon, sx, iconSx, ...rest }) => (
  <button
    type="button"
    sx={{
      border: 'none',
      bg: 'transparent',
      p: 0,
      fontFamily: 'sans',
      fontWeight: '500',
      fontSize: 'lg',
      color: 'icon',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      ...sx,
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
