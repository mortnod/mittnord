const themePreview = {
  auroraBackground: '#0D1115',
  auroraCardHover: '#1E2634',
  auroraGradient1: '#7ABBFE',
  auroraGradient2: '#B0FDC4',

  articBackground: '#F2F6F9',
  articCardHover: 'white',
  articGradient1: '#7ABBFE',
  articGradient2: '#93D7A5',

  duskBackground: '#0D1115',
  duskCardHover: '#1E2634',
  duskGradient1: '#FF585D',
  duskGradient2: '#FFA300',

  dawnBackground: '#F5F4F3',
  dawnCardHover: 'white',
  dawnGradient1: '#FF585D',
  dawnGradient2: '#FFA300',
};

const aurora = {
  background: '#0D1115',
  modalBg: '#1E2634',
  heading: 'white',
  muted: '#536380',
  card: '#141A24',
  cardHover: '#1E2634',
  icon: '#BACCEC',
  iconHover: '#E4F1FF',
  danger: '#E46A5E',
  gradient1: '#7ABBFE',
  gradient2: '#B0FDC4',
  border: '#1C2635',
  border2: '#353F51',
  outline: '#7ABBFE',
  ...themePreview,
};

const artic = {
  background: '#F2F6F9',
  modalBg: 'white',
  heading: '#2d3748',
  muted: '#72829e',
  card: 'white',
  cardHover: 'white',
  icon: '#14232f',
  iconHover: '#14232f',
  danger: '#E46A5E',
  gradient1: '#7ABBFE',
  gradient2: '#93D7A5',
  border: '#D4DAE4',
  border2: '#9EA4B0',
  outline: '#7ABBFE',
  ...themePreview,
};

const dusk = {
  background: '#0D1115',
  modalBg: '#1E2634',
  heading: 'white',
  muted: '#536380',
  card: '#141A24',
  cardHover: '#1E2634',
  icon: '#BACCEC',
  iconHover: '#E4F1FF',
  danger: '#E46A5E',
  gradient1: '#FF585D',
  gradient2: '#FFA300',
  border: '#1C2635',
  border2: '#353F51',
  outline: '#7ABBFE',
  ...themePreview,
};

const dawn = {
  background: '#F5F4F3',
  modalBg: 'white',
  heading: '#2d3748',
  muted: '#6f6a68',
  card: 'white',
  cardHover: 'white',
  icon: '#1E1410',
  iconHover: '#1E1410',
  danger: '#E46A5E',
  gradient1: '#FF585D',
  gradient2: '#FFA300',
  border: '#D4DAE4',
  border2: '#9EA4B0',
  outline: '#7ABBFE',
  ...themePreview,
};

const colors = {
  ...artic,
  modes: {
    aurora,
    artic,
    dusk,
    dawn,
  },
};

export default colors;
