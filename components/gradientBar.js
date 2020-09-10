/** @jsx jsx */
import { jsx } from 'theme-ui';

import { gradientAnimation } from '../utils/gradientAnimation';

export default function gradientBar() {
  return (
    <div
      sx={{
        ...gradientAnimation(),
        width: '100%',
        height: '1',
        mb: [4, null, 8],
      }}
    />
  );
}
