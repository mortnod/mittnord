/** @jsx jsx */
import { jsx } from 'theme-ui';
import useStickyState from '../../utils/useStickyState';
import Dot from './dot';
import isDarkTheme from '../../utils/isDarkTheme';
import Cross from '../icons/cross';
import IconButton from '../iconButton/iconButton';
import { withTranslation } from '../../i18n';

const shouldHideAlert = (startAt, endAt, closedAt) => {
  const now = new Date().getTime();
  return startAt > now || endAt < now || closedAt > startAt;
};

function Alert({ children, href, startAt, endAt, important, t }) {
  const [closedAt, setClosedAt] = useStickyState(
    '1989-02-04',
    'alert-closed-at'
  );

  if (
    shouldHideAlert(
      startAt.getTime(),
      endAt.getTime(),
      new Date(closedAt).getTime()
    )
  ) {
    return null;
  }

  return (
    <a
      href={href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
        height: 'min-content',
        color: 'icon',
        textDecoration: 'none',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border',
        borderRadius: 'full',
        fontSize: ['sm', null, 'md'],
        py: '1',
        pr: '1',
        pl: '6',
        outline: 'none',

        ':hover': {
          bg: isDarkTheme() ? 'border' : 'rgba(0,0,0,0.03)',
        },

        '&.focus-visible': {
          boxShadow: 'outline',
        },
      }}
    >
      {important && <Dot />}
      <div sx={{ display: 'flex', alignItems: 'center' }}>{children}</div>
      <IconButton
        icon={<Cross />}
        onClick={(e) => {
          e.preventDefault();
          setClosedAt(new Date().toISOString());
        }}
        styles={{
          ml: 'auto',
          width: '34px',
          height: '34px',
          ':hover': {
            bg: isDarkTheme() ? 'background' : 'rgba(0,0,0,0.05)',
          },
        }}
        iconStyles={{
          fontSize: 'sm',
        }}
      >
        {t('Close')}
      </IconButton>
    </a>
  );
}

export default withTranslation('common')(Alert);
