/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function Heading({ children }) {
  return (
    <h2
      sx={{
        color: 'heading',
        fontWeight: 'bold',
        fontSize: ['6vw', '4.6vw', '26px'],
        mt: ['3vw', '1vw', 0],
        mb: ['4vw', '3vw', '4'],
      }}
    >
      {children}
    </h2>
  );
}
