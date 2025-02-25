import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";

getLogger("theme.components.homepagev2Body");

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('homepagev2body');
    config.view = View;
    return config;
}
  
export default getConfig();
