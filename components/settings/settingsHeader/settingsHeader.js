/** @jsx jsx */
import { jsx } from 'theme-ui';

import { withTranslation } from '../../../i18n';
import Times from '../../icons/times';
import isDarkTheme from '../../../utils/isDarkTheme';
import IconButton from '../../iconButton/iconButton';

const SettingsHeader = ({ onClose, t }) => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bg: isDarkTheme() ? 'rgba(0,0,0,0.15)' : 'background',
        m: '-5',
        mb: 8,
        px: 5,
        py: 1,
      }}
    >
      <div
        sx={{
          fontWeight: '600',
          textTransform: 'uppercase',
          fontSize: 'xs',
          color: 'icon',
        }}
      >
        {t('Settings')}
      </div>
      <IconButton
        onClick={onClose}
        icon={<Times />}
        styles={{
          p: 1,
          ':hover': {
            bg: isDarkTheme() ? 'background' : 'rgba(0,0,0,0.05)',
          },

          ':hover div': {
            color: 'iconHover',
          },
        }}
        iconStyles={{
          fontSize: 'lg',
        }}
      >
        {t('Close')}
      </IconButton>
    </div>
  );
};

export default withTranslation('common')(SettingsHeader);
