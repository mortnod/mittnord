/** @jsx jsx */
import { jsx } from 'theme-ui';

const Social = ({ children, href, styles }) => (
  <a
    href={href}
    sx={{
      fontSize: '28px',
      ml: '3',
      color: 'icon',
      lineHeight: 1,
      mt: 1,
      ...styles,
    }}
  >
    {children}
  </a>
);

export default Social;
