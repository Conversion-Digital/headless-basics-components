import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/cd-headless-data/src";

getLogger("theme.components.footer");

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('footer');
    return config;
}
  
export default getConfig();
