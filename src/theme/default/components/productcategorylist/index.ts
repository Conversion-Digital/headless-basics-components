import { getLogger, getThemeConfig } from "@conversiondigital/cd-headless-data";
import { View } from "./view";
getLogger("theme.components.productcategorylist");
import { ThemeConfig } from "@conversiondigital/cd-headless-data/src/interfaces"

// const config: ThemeConfig = {
//   identifier: "productcategorylist",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('productcategorylist');
    config.view = View;
    return config;
}
export default getConfig();
