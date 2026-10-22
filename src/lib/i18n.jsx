import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { copy } from '@/lib/content';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'el';
    return window.localStorage.getItem('hh-lang') || 'el';
  });

  useEffect(() => {
    window.localStorage.setItem('hh-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'el' ? 'en' : 'el')),
      t: copy[lang],
      tr: (field) => (field && typeof field === 'object' ? field[lang] : field),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}