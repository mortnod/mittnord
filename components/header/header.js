/** @jsx jsx */
import { jsx } from 'theme-ui';

import Bars from '../icons/bars';
import SettingsButton from '../footer/settingsButton';

import Brand from './brand';

export default function Header({ openSettings }) {
  return (
    <div
      sx={{
        mb: [6, null, 12],
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
