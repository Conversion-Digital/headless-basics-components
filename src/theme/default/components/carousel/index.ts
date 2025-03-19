import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces";
import { View } from "./view";

const log = getLogger("theme.components.carousel");

async function getConfig(): Promise<ThemeConfig> {
    log.debug("Initializing theme configuration for carousel.");
    const config = await getThemeConfig("carousel");
    config.view = View;
    log.trace("Theme configuration for carousel loaded:", config);
    return config;
}

export default getConfig();