import { getLogger, getThemeConfig } from "@conversiondigital/cd-headless-data";
import { View } from "./view";
import { ThemeConfig } from "@conversiondigital/cd-headless-data/src/interfaces"

getLogger("theme.components.productdownloads");

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('productdownloads');
    config.view = View;
    return config;
}
export default getConfig();
