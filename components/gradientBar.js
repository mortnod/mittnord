/** @jsx jsx */
import { jsx } from 'theme-ui';

import gradientAnimation from '../utils/gradientAnimation';

export default function gradientBar() {
  return (
    <div
      sx={{
        ...gradientAnimation(),
        width: '100%',
        height: '1',
        mb: [2, 3, 8, null, '3.5vh'],
      }}
    />
  );
}
