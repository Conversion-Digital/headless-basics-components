import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";

getLogger("theme.components.advancedspecificationtable");

// const config: ThemeConfig = {
//   identifier: "AdvancedSpecificationTable",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('AdvancedSpecificationTable');
    config.view = View;
    return config;
}
  
export default getConfig();
