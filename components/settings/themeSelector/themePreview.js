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
          p: '3',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2',
          borderBottom: isDarkTheme(colorMode) ? '1px solid' : 'none',
          borderBottomColor: 'border',
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
