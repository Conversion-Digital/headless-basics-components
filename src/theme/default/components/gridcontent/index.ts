import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";

import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces"

getLogger("theme.components.gridcontent");

// const config: ThemeConfig = {
//   identifier: "GridContent",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('GridContent');
    config.view = View;
    return config;
}
export default getConfig();
