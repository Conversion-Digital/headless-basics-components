import { getLogger, getThemeConfig } from "@conversiondigital/cd-headless-data/src";
import { View } from "./view";
import { ThemeConfig } from "@conversiondigital/cd-headless-data/src/interfaces"
getLogger("theme.components.gallery")

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('gallery');
        config.view = View;
    return config;
}
export default getConfig();
