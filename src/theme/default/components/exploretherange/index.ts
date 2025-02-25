import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/cd-headless-data/src";
import { View } from "./view";

getLogger("theme.components.exploretherange");

// const config: ThemeConfig = {
//   identifier: "exploretherange",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('exploretherange');
        config.view = View;
    return config;
}
  
export default getConfig();
