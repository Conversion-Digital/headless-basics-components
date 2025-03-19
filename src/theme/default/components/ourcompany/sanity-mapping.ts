import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces/PageDefinition";
import { logPrefix } from "@conversiondigital/headless-basics-data/src/utils/logPrefix";
import { getLogger } from "@conversiondigital/headless-basics-data/src/services/logging/LogConfig";
const log = getLogger("theme.default.components.ourcompany.sanity-mapping");

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const rawData = pageAndComponentCombo.component.data as any;

  if (!rawData) {
    log.error(`${logPrefix()} No raw data found for ourcompany component.`);
    return {};
  }

  // Merge local fields with possible global component fields (like hero's approach)
  // If there is a "globalComponentSource", prefer that for field data
  let mappedData = { ...rawData };
  if (rawData.globalComponentSource) {
    mappedData = { ...rawData.globalComponentSource, ...rawData };
  }

  // Return the final mapped object
  return {
    title: mappedData.title || "Our Company",
    subTitle: mappedData.subTitle || "",
    description: mappedData.description || "",
    facts: mappedData.facts || [],
    learnMoreUrl: mappedData.learnMoreUrl || "",
    learnMoreLabel: mappedData.learnMoreLabel || "LEARN more",
    selectableVariant: mappedData.selectableVariant || "default",
    sortOrder: mappedData.sortOrder || 0,
    image: mappedData.media || null
  };
}