import { getLogger, getThemeConfig } from "@conversiondigital/cd-headless-data";
import { View } from "./view";
import { ThemeConfig } from "@conversiondigital/cd-headless-data/src/interfaces"

getLogger("theme.components.productvideos");

// const config: ThemeConfig = {
//   identifier: "productvideos",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };
async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('productvideos');
    config.view = View;
    return config;
}
export default getConfig();
