/** @jsx jsx */
import { jsx } from 'theme-ui';

import { gradientAnimation } from '../../utils/gradientAnimation';

function Brand() {
  return (
    <h2
      sx={{
        color: 'heading',
        letterSpacing: 'wider',
        fontWeight: 'bold',
        fontSize: ['xl', null, '2xl'],
        lineHeight: 1,
        mr: 6,
      }}
    >
      MITT
      <br />
      <span sx={{ ...gradientAnimation({ variant: 'text' }) }}>NORD</span>
    </h2>
  );
}

export default Brand;
