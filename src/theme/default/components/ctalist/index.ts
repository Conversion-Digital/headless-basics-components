import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";
getLogger("headless.theme.components.ctalist")

// const config: ThemeConfig = {
//   identifier: "ctalist",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// }

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('ctalist');
        config.view = View;
    return config;
}
  
export default getConfig();