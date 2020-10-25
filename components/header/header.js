/** @jsx jsx */
import { jsx } from 'theme-ui';

import Bars from '../icons/bars';
import SettingsButton from '../footer/settingsButton';

import Brand from './brand';

export default function Header({ openSettings }) {
  return (
    <div
      sx={{
        mb: [4, 6, 12, null, '5.5vh'],
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Brand />
      <SettingsButton
        icon={<Bars />}
        onClick={openSettings}
        iconSx={{ fontSize: '2xl' }}
        sx={{
          display: ['inline-flex', null, 'none'],
        }}
      />
    </div>
  );
}
