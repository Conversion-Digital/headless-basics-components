import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/cd-headless-data/src";
import { View } from "./view";

getLogger("theme.components.faq");

// const config: ThemeConfig = {
//   identifier: "faq",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('faq');
        config.view = View;
    return config;
}
  
export default getConfig();
