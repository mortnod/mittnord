import type { FormattersInitializer } from 'typesafe-i18n';

import type { Locales, Formatters } from './i18n-types';

export const initFormatters: FormattersInitializer<Locales, Formatters> = (
  locale: Locales, // eslint-disable-line unused-imports/no-unused-vars
) => {
  const formatters: Formatters = {
    // add your formatter functions here
  };

  return formatters;
};
