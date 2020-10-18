const northernLights = {
  background: '#101419',
  modalBg: '#1E2634',
  heading: 'white',
  card: '#141A24',
  cardHover: '#1E2634',
  icon: '#BACCEC',
  iconHover: '#E4F1FF',
  danger: '#E46A5E',
  gradient1: '#7ABBFE',
  gradient2: '#B0FDC4',
  border: '#1C2635',
};

const twilight = {
  background: '#F2F6F9',
  modalBg: 'white',
  heading: '#2d3748',
  card: 'white',
  cardHover: 'white',
  icon: '#14232f',
  iconHover: '#14232f',
  danger: '#E46A5E',
  gradient1: '#7ABBFE',
  gradient2: '#93D7A5',
  border: '#D4DAE4',
};

const dusk = {
  background: '#101419',
  modalBg: '#1E2634',
  heading: 'white',
  card: '#141A24',
  cardHover: '#1E2634',
  icon: '#BACCEC',
  iconHover: '#E4F1FF',
  danger: '#E46A5E',
  gradient1: '#FF585D',
  gradient2: '#FFA300',
  border: '#1C2635',
};

const dawn = {
  background: '#F5F4F3',
  modalBg: 'white',
  heading: '#2d3748',
  card: 'white',
  cardHover: 'white',
  icon: '#1E1410',
  iconHover: '#1E1410',
  danger: '#E46A5E',
  gradient1: '#FF585D',
  gradient2: '#FFA300',
  border: '#D4DAE4',
};

const colors = {
  ...northernLights,
  modes: {
    northernLights,
    twilight,
    dusk,
    dawn,
  },
};

export default colors;
