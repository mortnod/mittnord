/** @jsx jsx */
import { jsx } from 'theme-ui';
import Brand from './brand';

export default function Header() {
  return (
    <div
      sx={{
        mb: [6, null, 12],
      }}
    >
      <Brand />
    </div>
  );
}
