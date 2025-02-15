/** @jsxImportSource theme-ui */
import { useRef } from 'react';
import isDarkTheme from '../../utils/isDarkTheme';
import Search from '../icons/search';
import IconButton from '../iconButton/iconButton';

function SearchField() {
  const searchInput = useRef(null);

  return (
    <form
      sx={{ ml: [0, 'auto'], width: ['100%', 'auto'], position: 'relative' }}
      onSubmit={(e) => {
        e.preventDefault();
        window.open(`search-href${searchInput.current.value}`);
      }}
    >
      <input
        placeholder="Search"
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
