export const supportedLanguages = ["en", "es"] as const;
export const defaultLanguage = "es";
const showDefaultLangInUrl = false;

export const generatePaths = (): Array<{
  params: { lang: string | undefined };
}> => {
  const paths = supportedLanguages.map((languageCode) => ({
    params: {
      lang:
        languageCode === defaultLanguage && !showDefaultLangInUrl
          ? undefined
          : languageCode,
    },
  }));

  return paths;
};

export const getCurrentLanguage = (lang: string | undefined): string =>
  lang && (supportedLanguages as readonly string[]).includes(lang)
    ? lang
    : defaultLanguage;

/**
 * Builds a localized path for the given language, mirroring generatePaths():
 * the default language is unprefixed, other languages are prefixed with
 * their code (e.g. "en" -> "/", "es" -> "/es/", "es" + "contact" -> "/es/contact").
 */
export const getLocalizedPath = (lang: string, slug = ""): string => {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  const prefix =
    lang === defaultLanguage && !showDefaultLangInUrl ? "" : `/${lang}`;

  return `${prefix}/${cleanSlug}`.replace(/\/+/g, "/");
};

/** Removes a language's URL prefix (if any) to recover the page's slug. */
export const stripLangPrefix = (pathname: string, lang: string): string => {
  if (lang === defaultLanguage) return pathname;
  return pathname.replace(new RegExp(`^/${lang}(?=/|$)`), "") || "/";
};
