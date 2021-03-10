/** @jsx jsx */
import { jsx } from 'theme-ui';

const ScreenReaderOnly = ({ children }) => {
  return (
    <span
      sx={{
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(100%)',
        height: '1px',
        width: '1px',
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
};

export default ScreenReaderOnly;
