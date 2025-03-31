
import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";
import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces";

getLogger("theme.components.frame469.corporate1");

async function getConfig(): Promise<ThemeConfig> {
  const config = await getThemeConfig("frame469");
  config.view = View;
  return config;
}
export default getConfig();
