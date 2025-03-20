import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils";

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const rawData = pageAndComponentCombo.component.data;
  const item = extractComponentsFromSanityData(rawData, "calltoactiontwoimagebtn");
  return item;
}