/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function CardHeading({ children }) {
  return (
    <h2
      sx={{
        color: 'heading',
        fontWeight: '500',
        letterSpacing: 'wide',
        fontSize: ['5.2vw', '3.6vw', 'lg'],
        mt: ['3vw', '1vw', 0],
        mb: ['4vw', '3vw', '4'],
      }}
    >
      {children}
    </h2>
  );
}
