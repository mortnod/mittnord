/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function Alert({ children, href, startAt, endAt }) {
  const now = new Date();

  if (startAt.getTime() > now.getTime()) {
    return null;
  }

  if (endAt.getTime() < now.getTime()) {
    return null;
  }

  return (
    <a
      href={href}
      sx={{
        display: 'block',
        width: '100%',
        color: 'icon',
        textDecoration: 'none',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border',
        borderRadius: 'full',
        py: '4',
        px: '6',
      }}
    >
      {children}
    </a>
  );
}
