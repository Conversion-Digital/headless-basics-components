import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces"
import { View } from "./view"; 
getLogger("theme.components.postnote")

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('postnote');
    config.view = View;
    return config;
}
export default getConfig();
