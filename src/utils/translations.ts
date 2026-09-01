export const translations = {
  en: {},
  es: {},
} as const;

export type Language = keyof typeof translations;
export type Translations = (typeof translations)[Language];

export function getTranslations(lang: string | undefined): Translations {
  const language = (lang || "en") as Language;
  return translations[language] || translations.en;
}
