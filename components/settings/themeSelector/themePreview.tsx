/** @jsxImportSource theme-ui */

import { ColorMode, useTheme } from '../../../constants/theme';
import gradientAnimation from '../../../utils/gradientAnimation';
import isDarkTheme from '../../../utils/isDarkTheme';

type Props = {
  colorMode: ColorMode;
};

const ThemePreview = ({ colorMode }: Props) => {
  const { theme } = useTheme();

  return (
    <div sx={{ bg: `${theme.colors[`${colorMode}Background`]}` }}>
      <div
        // @ts-expect-error Seems like gradientAnimation causes trouble with typing and I'm too lazy to properly fix
        sx={{
          height: '2',
          ...gradientAnimation({
            gradient1: `${colorMode}Gradient1`,
            gradient2: `${colorMode}Gradient2`,
          }),
        }}
      />
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2',
          borderBottom: isDarkTheme(colorMode) ? '1px solid' : 'none',
          borderBottomColor: 'border',
          px: '3',
          pt: '3',
          pb: '3',

          '.focus-visible + label &': {
            px: '9px', // 12px padding normally - 3px extra padding added to parent div
            pt: '9px',
            pb: '15px',
          },
        }}
      >
        {[...Array(6)].map((_e, i) => (
          <div
            key={i} // eslint-disable-line react/no-array-index-key
            sx={{
              pb: '100%',
              bg: `${theme.colors[`${colorMode}CardHover`]}`,
              boxShadow: '3',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemePreview;
