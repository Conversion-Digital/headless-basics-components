import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/headless-basics-data/src";

getLogger("theme.components.footer");

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('footer');
    return config;
}
  
export default getConfig();
