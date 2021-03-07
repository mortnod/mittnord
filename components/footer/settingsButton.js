/** @jsx jsx */
import { jsx } from 'theme-ui';

const settingsButton = ({ children, icon, iconSx, ...rest }) => (
  <button
    type="button"
    sx={{
      border: 'none',
      bg: 'transparent',
      p: 0,
      ml: 6,
      fontFamily: 'sans',
      fontWeight: '500',
      fontSize: 'lg',
      color: 'icon',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
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
