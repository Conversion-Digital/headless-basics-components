'use server'

import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces"
import { View } from "./view"; 
getLogger("theme.components.Chatbox")

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('Chatbox');
    config.view = View;
    return config;
}
export default getConfig();
