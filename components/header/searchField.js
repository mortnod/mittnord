/** @jsx jsx */
import { useRef } from 'react';
import { jsx } from 'theme-ui';

import { withTranslation } from '../../i18n';
import isDarkTheme from '../../utils/isDarkTheme';
import Search from '../icons/search';
import IconButton from '../iconButton/iconButton';

function SearchField({ t }) {
  const searchInput = useRef(null);

  return (
    <form
      sx={{ ml: [0, 'auto'], width: ['100%', 'auto'], position: 'relative' }}
      onSubmit={(e) => {
        e.preventDefault();
        window.open(t('search-href') + searchInput.current.value);
      }}
    >
      <input
        placeholder={t('Search')}
        ref={searchInput}
        sx={{
          width: ['100%', 64],
          fontFamily: 'sans',
          fontSize: ['sm', null, 'md'],
          borderRadius: 'full',
          px: 4,
          py: 3,
          border: 0,
          boxShadow: isDarkTheme() ? 'dark' : 3,
          letterSpacing: 'wide',
          color: 'heading',
          bg: isDarkTheme() ? 'border' : 'card',
          outline: 0,

          ':focus': {
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
        {t('Search')}
      </IconButton>
    </form>
  );
}

export default withTranslation('common')(SearchField);
