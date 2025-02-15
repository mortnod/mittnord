/** @jsxImportSource theme-ui */
export default function Dot({ size = '8px' }) {
  return (
    <div sx={{ position: 'relative', width: size, mr: 4 }}>
      <div
        sx={{
          height: size,
          width: size,
          position: 'absolute',
          top: '50%',
          left: '50%',
          textAlign: 'center',
          mt: `calc(-${size}/2)}`,
          ml: `calc(-${size}/2)}`,
          borderRadius: 'full',
          zIndex: 1,
          backgroundColor: 'danger',
        }}
      >
        <div
          sx={{
            backgroundColor: 'danger',
            position: 'absolute',
            width: `calc(${size}*3)}`,
            height: `calc(${size}*3)}`,
            zIndex: ' -1',
            left: ' 50%',
            top: ' 50%',
            opacity: ' 0',
            mt: `calc(-${size}*3/2)}`,
            ml: `calc(-${size}*3/2)}`,
            borderRadius: 'full',
            animation: 'ripple 1.8s infinite',
            '@keyframes ripple': {
              '0%': {
                opacity: 1,
                transform: 'scale(0)',
              },
              '100%': {
                opacity: 0,
                transform: 'scale(1)',
              },
            },
          }}
        />
      </div>
    </div>
  );
}
