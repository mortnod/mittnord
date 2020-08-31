/** @jsx jsx */
import { jsx } from 'theme-ui';

const Print = () => (
  <svg
    sx={{ width: ['45%', null, '55%'], fill: 'currentColor' }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      opacity=".4"
      d="M64 480a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-96H64zM368 96a16 16 0 0 1-16-16V0H96a32 32 0 0 0-32 32v192h384V96z"
    />
    <path d="M368 96h80v-4.58a17.92 17.92 0 0 0-5.25-12.67l-73.43-73.5A18 18 0 0 0 356.57 0H352v80a16 16 0 0 0 16 16zm80 96v32H64v-32a64 64 0 0 0-64 64v112a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16V256a64 64 0 0 0-64-64zm-16 136a24 24 0 1 1 24-24 24 24 0 0 1-24 24z" />
  </svg>
);

export default Print;
