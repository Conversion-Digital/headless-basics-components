import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.model.mapping");

/**
 * Maps the result of the sanity-based model query to a simpler structure.
 * The query returns "allPage" with each item containing _id, title, and __typename.
 * We return the first item from allPage if it exists.
 */
export function mapIdentifierData(individualComponentProps: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[model][mapIdentifierData][${individualComponentProps.page.source}][${individualComponentProps.page.preliminarySlug}] variables heartcore mapIdentifierData > `,
    JSON.stringify(individualComponentProps?.component?.data)
  );

  const data = individualComponentProps?.component?.data;
  if (!data || !data.allPage) {
    log.warn(`${logPrefix()}[model][mapIdentifierData] No "allPage" array found in data.`);
    return null;
  }

  if (!Array.isArray(data.allPage) || data.allPage.length === 0) {
    log.warn(`${logPrefix()}[model][mapIdentifierData] "allPage" array is empty.`);
    return null;
  }

  const firstPage = data.allPage[0];
  log.trace(`${logPrefix()}[model][mapIdentifierData] returning first page:`, firstPage);
  return firstPage;
}