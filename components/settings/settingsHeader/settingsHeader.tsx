/** @jsxImportSource theme-ui */

import { useI18nContext } from '../../../src/i18n/i18n-react';
import isDarkTheme from '../../../utils/isDarkTheme';
import IconButton from '../../iconButton/iconButton';
import Times from '../../icons/times';

type Props = { onClose: () => void };

const SettingsHeader = ({ onClose }: Props) => {
  const { LL } = useI18nContext();

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
        {LL.SETTINGS()}
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
        Close
      </IconButton>
    </div>
  );
};

export default SettingsHeader;
