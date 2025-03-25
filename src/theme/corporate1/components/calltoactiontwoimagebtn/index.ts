import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";
import type { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces";

getLogger("theme.components.calltoactiontwoimagebtn");

async function getConfig(): Promise<ThemeConfig> {
  const config = await getThemeConfig('calltoactiontwoimagebtn');
  config.view = View;
  return config;
}

export default getConfig();