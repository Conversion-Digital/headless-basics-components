import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data";
import { View } from "./view";
import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces"

getLogger("theme.components.testimonials");

// const config: ThemeConfig = {
//   identifier: "testimonials",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
//   view: View,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('testimonials');
    config.view = View;
    return config;
}
export default getConfig();
