import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.model.mapping");

export function mapIdentifierData(individualComponentProps: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[model][mapIdentifierData][${individualComponentProps.page.source}][${individualComponentProps.page.preliminarySlug}] variables heartcore mapIdentifierData > `, JSON.stringify(individualComponentProps?.component?.data));

  const result = individualComponentProps?.component?.data?.content;
  log.trace(`${logPrefix()}[mapIdentifierData][result][${individualComponentProps.page.preliminarySlug}] > `, JSON.stringify(individualComponentProps?.component?.data));
  return result;
}
