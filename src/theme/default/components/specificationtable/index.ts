import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data";
import { View } from "./view";
import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces"


getLogger("theme.components.specificationtable");


async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('specificationtable');
    config.view = View;
    return config;
}
export default getConfig();
