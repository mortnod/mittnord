import Cookies from 'cookies';

import { i18n } from '../i18n';

// Client-side we use i18n.language to tell what language
// is currently selected. However, the i18n object isn't
// available server-side. Thus we need to fetch the value
// directly from the cookie by ourselves
export default function getInitialLanguage(req, res) {
  const isServer = !!req;
  const cookies = new Cookies(req, res);

  // Client-side
  if (i18n.language) {
    return i18n.language;
  }

  // Server-side
  if (isServer) {
    const languageFromCookie = cookies.get('next-i18next');

    if (languageFromCookie) {
      return languageFromCookie;
    }
  }

  // Default language
  return 'nb';
}
