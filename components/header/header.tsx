/** @jsxImportSource theme-ui */
import IconButton from '../iconButton/iconButton';
import Cog from '../icons/cog';

import Brand from './brand';
import CurrentAlert from './currentAlert';
import SearchField from './searchField';

type Props = {
  openSettings: () => void;
};

function Header({ openSettings }: Props) {
  return (
    <>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          pb: [2, 3, 4, null, '5.5vh'],
        }}
      >
        <Brand />
        <div
          sx={{
            display: ['none', null, null, null, 'block'],
            width: '100%',
            mr: 6,
            ml: 2,
          }}
        >
          <CurrentAlert />
        </div>
        <SearchField />
        <IconButton
          icon={<Cog />}
          onClick={openSettings}
          styles={{
            display: ['flex', null, 'none'],
            ml: [2, 3],
            width: '40px',
            height: '40px',
          }}
          iconStyles={{
            fontSize: 'lg',
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
