import { getLogger, getThemeConfig } from "@conversiondigital/cd-headless-data";
import { ThemeConfig } from "@conversiondigital/cd-headless-data/src/interfaces"

getLogger("theme.components.seo");

// const config: ThemeConfig = {
//   identifier: "seo",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
// };

export default getThemeConfig('seo');
