/** @jsx jsx */
import { jsx } from 'theme-ui';

import { withTranslation } from '../../../i18n';
import Times from '../../icons/times';
import SettingsButton from '../../footer/settingsButton';
import isDarkTheme from '../../../utils/isDarkTheme';

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
        py: 3,
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
      <SettingsButton onClick={onClose} icon={<Times />} />
    </div>
  );
};

export default withTranslation('common')(SettingsHeader);
