import { getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";
import { ViewFn } from "@conversiondigital/headless-basics-data/src"; // Ensure ViewFn is imported

async function getConfig() {
  const config: { view?: ViewFn } = {}; // Declare and initialize config
  config.view = View as ViewFn; // Ensure View matches the expected type
  config.view = View as unknown as ViewFn; // Cast View to match the expected ViewFn type
  return config;
}

export default getConfig();
