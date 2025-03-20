import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src"
import { View } from "./view"
import type { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces"

getLogger("theme.components.calltoactioncard1")

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('calltoactioncard1');
    config.view = View;
    return config;
}
  
export default getConfig();