import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/cd-headless-data/src";
import { View } from "./view";

getLogger("theme.components.accordion");

// const config: ThemeConfig = {
//   identifier: "accordion",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('accordion');
    config.view = View;
    return config;
}
  
export default getConfig();
