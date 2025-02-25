import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/cd-headless-data/src";
import { View } from "./view";

getLogger("theme.components.featurethreeimagessection");

// const config: ThemeConfig = {
//   identifier: "featurethreeimagessection",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('featurethreeimagessection');
        config.view = View;
    return config;
}
  
export default getConfig();