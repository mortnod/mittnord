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

const backgroundClipText = {
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitTextFillColor: 'transparent',
  color: 'black',
};

export const northernLightsTextAnimation = {
  ...northernLightsAnimation,
  ...backgroundClipText,
  display: 'inline-block',
};

export const northernLightsFocus = {
  background:
    'linear-gradient(45deg, #7ABBFE 20%, #B0FDC4 40%, #B0FDC4 60%, #7ABBFE 80%)',
  backgroundSize: '400% auto',
  animation: 'aurora 20s linear infinite',
  '@keyframes aurora': {
    to: {
      backgroundPosition: '400% center',
    },
  },
  color: 'background',
};
