/** @jsx jsx */
import { jsx } from 'theme-ui';

const Social = ({ children, href, styles }) => (
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

      ':focus': {
        boxShadow: 'outline',
      },

      ':hover': {
        color: 'iconHover',
      },

      ...styles,
    }}
  >
    {children}
  </a>
);

export default Social;
