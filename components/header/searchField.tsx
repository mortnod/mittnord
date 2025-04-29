/** @jsxImportSource theme-ui */
import { useRef } from 'react';

import { useI18nContext } from '../../src/i18n/i18n-react';
import isDarkTheme from '../../utils/isDarkTheme';
import IconButton from '../iconButton/iconButton';
import Search from '../icons/search';

function SearchField() {
  const searchInput = useRef<HTMLInputElement>(null);
  const { LL } = useI18nContext();

  const getRandomPlaceholder = () => {
    const taglines = [
      LL.NORA_Q1(),
      LL.NORA_Q2(),
      LL.NORA_Q3(),
      LL.NORA_Q4(),
      LL.NORA_Q5(),
    ];

    const randomId = Math.floor(Math.random() * taglines.length);
    return taglines[randomId];
  };

  return (
    <form
      sx={{ width: '100%', position: 'relative', mb: [2, 2, 6] }}
      onSubmit={(e) => {
        e.preventDefault();
        window.open(`${LL.SEARCH_URL()}${searchInput.current?.value}`);
      }}
    >
      <input
        placeholder={getRandomPlaceholder()}
        ref={searchInput}
        sx={{
          WebkitAppearance: 'none',
          width: '100%',
          height: '48px',
          fontFamily: 'sans',
          fontSize: 'md',
          py: 3,
          pl: 4,
          pr: 10,

          border: 0,
          boxShadow: isDarkTheme() ? 'dark' : 3,
          letterSpacing: 'wide',
          color: 'heading',
          bg: 'card',
          outline: 0,

          ':hover': {
            bg: 'cardHover',
          },

          // Don't show hover colors on phones
          '@media (pointer: coarse)': {
            ':hover': {
              bg: 'card',
            },
          },

          '&:focus': {
            boxShadow: 'outline',
          },

          '::placeholder': {
            color: 'placeholder',
            opacity: 1 /* Firefox */,
          },
        }}
      />
      <IconButton
        icon={<Search />}
        type="submit"
        styles={{
          position: 'absolute',
          top: '50%',
          right: 1,
          ml: 6,
          mt: '-18px',

          ':hover': {
            bg: 'background',
          },
        }}
      >
        Search
      </IconButton>
    </form>
  );
}

export default SearchField;
