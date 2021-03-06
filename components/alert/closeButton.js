/** @jsx jsx */
import { jsx } from 'theme-ui';
import isDarkTheme from '../../utils/isDarkTheme';

const CloseButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      sx={{
        border: '0',
        borderRadius: 'full',
        bg: 'transparent',
        display: 'flex',
        alignItems: 'center',
        color: 'icon',
        padding: 2,
        transition: 'all 200ms escape',
        cursor: 'pointer',

        ':hover': {
          bg: isDarkTheme() ? 'border' : 'rgba(0,0,0,0.05)',
        },
      }}
    >
      <svg
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.398 14.605a1.989 1.989 0 0 1-2.813 2.812L9 11.812l-5.605 5.605a1.989 1.989 0 0 1-2.812-2.812L6.188 9.02.602 3.395A1.989 1.989 0 0 1 3.415.583L9.02 6.188 14.605.583a1.989 1.989 0 0 1 2.812 2.812L11.812 9l5.605 5.585-.02.02z" />
      </svg>
    </button>
  );
};

export default CloseButton;
