/** @jsx jsx */
import { jsx } from 'theme-ui';

import { gradientAnimation } from '../../../utils/gradientAnimation';
import getThemeColors from '../../../utils/getThemeColors';
import isDarkTheme from '../../../utils/isDarkTheme';

const ExampleCard = ({ colors }) => (
  <div sx={{ pb: '100%', bg: colors.cardHover, boxShadow: '3' }} />
);

const ThemePreview = ({ colorMode }) => {
  const colors = getThemeColors(colorMode);

  return (
    <div sx={{ bg: colors.background }}>
      <div sx={{ height: '2', ...gradientAnimation({ colorMode }) }} />
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2',
          borderBottom: isDarkTheme(colorMode) ? '1px solid' : 'none',
          borderBottomColor: 'border',
          p: '3',

          '.focus-visible + label &': {
            p: '9px', // 12px padding normally - 3px extra padding added to parent div
          },
        }}
      >
        <ExampleCard colors={colors} />
        <ExampleCard colors={colors} />
        <ExampleCard colors={colors} />
        <ExampleCard colors={colors} />
        <ExampleCard colors={colors} />
        <ExampleCard colors={colors} />
      </div>
    </div>
  );
};

export default ThemePreview;
