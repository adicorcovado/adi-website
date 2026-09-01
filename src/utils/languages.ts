export const generatePaths = (): Array<{
  params: { lang: string | undefined };
}> => {
  const supportedLanguages = ["en", "es"].map((code) => ({
    languageCode: code,
  }));
  const defaultLanguage = "en";
  const showDefaultLangInUrl = false;
  const paths = supportedLanguages.map((lang) => ({
    params: {
      lang:
        lang.languageCode === defaultLanguage && !showDefaultLangInUrl
          ? undefined
          : lang.languageCode,
    },
  }));

  return paths;
};
