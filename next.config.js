const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  // UNCOMMENT TO ACTIVATE SUBPATHS
  // nb: 'nb',
  // en: 'en',
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
