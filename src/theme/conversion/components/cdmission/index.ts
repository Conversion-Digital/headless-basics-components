import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";
import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces"
import { query } from './sanity-query';

getLogger("theme.components.cdmission");

async function getConfig(): Promise<ThemeConfig> {
  const config = await getThemeConfig('cdmission');
  config.view = View;
  return config;
}
export default getConfig();