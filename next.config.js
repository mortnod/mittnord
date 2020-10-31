const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withPWA = require('next-pwa');

const localeSubpaths = {
  // UNCOMMENT TO ACTIVATE SUBPATHS
  // nb: 'nb',
  // en: 'en',
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
});
