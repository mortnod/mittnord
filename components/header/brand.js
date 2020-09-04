/** @jsx jsx */
import { jsx } from 'theme-ui';
import gradientAnimation from '../../utils/gradientAnimation';

export default function Brand() {
  return (
    <h2
      sx={{
        color: 'heading',
        letterSpacing: 'wider',
        fontWeight: 'bold',
        fontSize: ['lg', null, 'xl'],
        lineHeight: 1,
      }}
    >
      MITT
      <br />
      <span sx={{ ...gradientAnimation('text') }}>NORD</span>
    </h2>
  );
}
