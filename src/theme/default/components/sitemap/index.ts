import { getLogger, getThemeConfig } from "@conversiondigital/cd-headless-data";
import { ThemeConfig } from "@conversiondigital/cd-headless-data/src/interfaces"

getLogger("theme.components.sitemap");

// const config: ThemeConfig = {
//   identifier: "sitemap",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
// };

export default getThemeConfig('sitemap');