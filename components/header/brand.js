/** @jsx jsx */
import { jsx } from 'theme-ui';
import { northernLightsTextAnimation } from '../../constants/northernLightsAnimation';

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
      <span sx={{ ...northernLightsTextAnimation }}>NORD</span>
    </h2>
  );
}
