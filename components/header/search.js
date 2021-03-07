/** @jsx jsx */
import { useRef } from 'react';
import { jsx } from 'theme-ui';

import { withTranslation } from '../../i18n';
import isDarkTheme from '../../utils/isDarkTheme';

function Search({ t }) {
  const searchInput = useRef(null);

  return (
    <form
      sx={{ ml: [0, 'auto'], width: ['100%', 'auto'] }}
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
    </form>
  );
}

export default withTranslation('common')(Search);
