/** @jsx jsx */
import { jsx } from 'theme-ui';
import useStickyState from '../../utils/useStickyState';
import CloseButton from './closeButton';

const shouldHideAlert = (startAt, endAt, closedAt) => {
  const now = new Date().getTime();
  return startAt > now || endAt < now || closedAt > startAt;
};

export default function Alert({ children, href, startAt, endAt }) {
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
        justifyContent: 'space-between',
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
      }}
    >
      <div sx={{ display: 'flex', alignItems: 'center' }}>{children}</div>
      <CloseButton
        onClick={(e) => {
          e.preventDefault();
          setClosedAt(new Date().toISOString());
        }}
      />
    </a>
  );
}
