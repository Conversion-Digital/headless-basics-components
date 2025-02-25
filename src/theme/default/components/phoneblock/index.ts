import { getLogger, getThemeConfig } from "@conversiondigital/cd-headless-data/src";
import { View } from "./view";
import { ThemeConfig } from "@conversiondigital/cd-headless-data/src/interfaces"

getLogger("theme.components.phoneblock");

// const config: ThemeConfig = {
//   identifier: "PhoneBlock",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('PhoneBlock');
    config.view = View;
    return config;
}
export default getConfig();

