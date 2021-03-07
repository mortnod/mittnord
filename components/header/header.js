/** @jsx jsx */
import { jsx } from 'theme-ui';

import Bars from '../icons/bars';
import SettingsButton from '../footer/settingsButton';

import Brand from './brand';
import CurrentAlert from './currentAlert';

function Header({ openSettings }) {
  return (
    <>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: [2, 3, 4, null, '5.5vh'],
        }}
      >
        <Brand />
        <div
          sx={{
            display: ['none', null, null, null, 'block'],
            width: '100%',
            ml: 6,
          }}
        >
          <CurrentAlert />
        </div>
        <SettingsButton
          icon={<Bars />}
          onClick={openSettings}
          iconSx={{ fontSize: '2xl' }}
          sx={{
            display: ['inline-flex', null, 'none'],
          }}
        />
      </div>
      <div
        sx={{
          display: ['block', null, null, null, 'none'],
          width: '100%',
          py: [1, null],
        }}
      >
        <CurrentAlert />
      </div>
    </>
  );
}

export default Header;
