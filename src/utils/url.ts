
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces";

export function stripSiteLanguagePrefix(url: string, languageSite: LanguageSite | undefined) {
  if (!languageSite || !url) {
    return url;
  }

  url = url.replace(languageSite?.homepageSlugPrefix, "");
  url = url.replace("/" + languageSite?.countryCode, "");

  return url;
}

export function processURLForNavigation(url: string, languageSite: LanguageSite | undefined) {
  if (url?.startsWith("http")) return url;
  url = stripSiteLanguagePrefix(url, languageSite);

  if (languageSite?.specialSlugPrefix) {
    const valueToRemove = languageSite.specialSlugPrefix.replace(/\/+/g, "");
    url = url.replace(valueToRemove, "");
  }

  if (languageSite?.shouldLanguageCodeBeAddedToNav) {
    url = `/${languageSite.countryCode}${url}`;
  }
  return url;
}
