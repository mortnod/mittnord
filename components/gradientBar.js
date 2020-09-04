/** @jsx jsx */
import { jsx } from 'theme-ui';

import gradientAnimation from '../utils/gradientAnimation';

export default function gradientBar() {
  return <div sx={{ ...gradientAnimation(), width: '100%', height: '1' }} />;
}
