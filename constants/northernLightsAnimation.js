export const northernLightsAnimation = {
  background:
    'linear-gradient(45deg, #7ABBFE 20%, #B0FDC4 40%, #B0FDC4 60%, #7ABBFE 80%)',
  backgroundSize: '200% auto',
  animation: 'aurora 10s linear infinite',
  '@keyframes aurora': {
    to: {
      backgroundPosition: '200% center',
    },
  },
};

export const northernLightsTextAnimation = {
  ...northernLightsAnimation,
  display: 'inline-block',
  color: '#000',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitTextFillColor: 'transparent',
};
