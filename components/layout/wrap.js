/** @jsxImportSource theme-ui */

const Wrap = ({ children }) => (
  <div
    sx={{
      mx: 'auto',
      p: [2, 3],
      maxWidth: ['100%', null, '630px', '840px', '1270px'],
    }}
  >
    {children}
  </div>
);

export default Wrap;
