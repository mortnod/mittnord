/** @jsxImportSource theme-ui */
import { useRef } from 'react';

import { useI18nContext } from '../../src/i18n/i18n-react';
import isDarkTheme from '../../utils/isDarkTheme';
import IconButton from '../iconButton/iconButton';
import Search from '../icons/search';

function SearchField() {
  const searchInput = useRef<HTMLInputElement>(null);
  const { LL } = useI18nContext();

  return (
    <form
      sx={{ ml: [0, 'auto'], width: ['100%', 'auto'], position: 'relative' }}
      onSubmit={(e) => {
        e.preventDefault();
        window.open(`${LL.SEARCH_URL()}${searchInput.current?.value}`);
      }}
    >
      <input
        placeholder={LL.SEARCH()}
        ref={searchInput}
        sx={{
          WebkitAppearance: 'none',
          width: ['100%', 64],
          height: ['42px', null, '44px'],
          fontFamily: 'sans',
          fontSize: 'md',
          borderRadius: 'full',
          px: 4,
          py: 3,
          border: 0,
          boxShadow: isDarkTheme() ? 'dark' : 3,
          letterSpacing: 'wide',
          color: 'heading',
          bg: isDarkTheme() ? 'border' : 'card',
          outline: 0,

          '&.focus-visible': {
            boxShadow: 'outline',
          },

          '::placeholder': {
            color: isDarkTheme() ? 'icon' : 'muted',
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
