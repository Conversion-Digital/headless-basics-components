import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils";
import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function mapIdentifierData(pageAndComponent: PageAndSingleComponentDetails) {
  const rawData = pageAndComponent.component.data;
  if (!rawData) return null;

  // Attempt to extract 'Ourcompany' from the data
  const item = extractComponentsFromSanityData(rawData, "ourcompany");
  if (!item) return null;

  // Merge local and global references
  const hasGlobal = item?.globalComponentSource;
  const merged = {
    title: item?.title || hasGlobal?.title || "OUR COMPANY",
    description: item?.description || hasGlobal?.description || "",
    buttonLabel: item?.buttonLabel || hasGlobal?.buttonLabel || "Learn More",
    selectableVariant: item?.selectableVariant || hasGlobal?.selectableVariant || "default",
    sortOrder: item?.sortOrder || 0,
    stats: item?.stats && item?.stats.length > 0
      ? item?.stats
      : hasGlobal?.stats || [],
  };

  return merged;
}