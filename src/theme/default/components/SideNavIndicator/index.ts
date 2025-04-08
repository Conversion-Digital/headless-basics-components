import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";

import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces"

const log = getLogger("theme.components.sideNavIndicator");



// Configure the component for the theme system
async function getConfig(): Promise<ThemeConfig> {
    try {
        const config = await getThemeConfig('SideNavIndicator');
        config.view = View;
        return config;
    } catch (error) {
        log.error("Error configuring SideNavIndicator component:", error);
        throw error;
    }
}

export default getConfig();
