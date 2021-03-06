/** @jsx jsx */
import { jsx } from 'theme-ui';
import useStickyState from '../../utils/useStickyState';

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
        display: 'block',
        width: '100%',
        color: 'icon',
        textDecoration: 'none',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border',
        borderRadius: 'full',
        py: '4',
        px: '6',
      }}
    >
      {children}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setClosedAt(new Date().toISOString());
        }}
      >
        close
      </button>
    </a>
  );
}
