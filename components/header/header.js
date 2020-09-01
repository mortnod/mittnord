/** @jsx jsx */
import { jsx } from 'theme-ui';
import Brand from './brand';

export default function Header() {
  return (
    <div
      sx={{
        mb: '12',
      }}
    >
      <Brand />
    </div>
  );
}
