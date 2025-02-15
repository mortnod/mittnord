/** @jsxImportSource theme-ui */

function Custom404() {
  return (
    <div
      sx={{
        color: 'heading',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>404 - Page Not Found</h1>
      <a href="/" sx={{ color: 'icon', mt: '2' }}>
        Go to frontpage
      </a>
    </div>
  );
}

export default Custom404;
