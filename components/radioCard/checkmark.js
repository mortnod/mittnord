/** @jsxImportSource theme-ui */

const Checkmark = ({ checked }) => (
  <svg
    sx={{
      fill: 'currentColor',
      width: '1em',
      height: '1em',
      display: checked ? 'block' : 'none',
    }}
    viewBox="0 0 12 9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4.236 8.343L.661 4.856a.527.527 0 0 1 0-.758l.778-.759a.56.56 0 0 1 .778 0l2.408 2.349L9.783.658a.56.56 0 0 1 .778 0l.778.758c.215.21.215.549 0 .758L5.014 8.343a.56.56 0 0 1-.778 0z"
    />
  </svg>
);

export default Checkmark;
