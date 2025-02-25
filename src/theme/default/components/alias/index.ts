import { getLogger, getThemeConfig, ThemeConfig } from "@conversiondigital/cd-headless-data/src";

getLogger("theme.components.alias");

// const config: ThemeConfig = {
//   identifier: "alias",
//   mapIdentifierData,
//   getQuery,
//   query,
//   variables,
// };

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('alias');
    return config;
}
export default getConfig();