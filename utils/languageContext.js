import React, { useContext } from 'react';

export const LanguageContext = React.createContext();

export function useLanguage() {
  const language = useContext(LanguageContext);

  if (language === undefined) {
    throw new Error(
      'useLanguage must be wrapped in a <LanguageContext.Provider> component'
    );
  }

  return language;
}
