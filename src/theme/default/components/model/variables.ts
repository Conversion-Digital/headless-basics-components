import { getLogger, isGuid, logPrefix, PageAndSingleComponentDetails, variablesById, variablesMultiSiteSlug } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.model.variables");

export function variables(individualComponentProps: PageAndSingleComponentDetails) {
  try {
    if (typeof individualComponentProps?.component?.variableForQuery === 'undefined') {
      log.info(`${logPrefix()}[model][variables][${individualComponentProps.page.source}] individualComponentProps ${JSON.stringify(individualComponentProps)}`);
      throw new Error(`${logPrefix()}[model][variables][${individualComponentProps.page.source}] IndividualComponentProps.component?.variableForQuery is undefined`);
    }

    const thisBackendSlug = individualComponentProps?.component?.variableForQuery;

    if (typeof thisBackendSlug === 'undefined') {
      throw new Error(`${logPrefix()}[model][variables][${individualComponentProps.page.source}] IndividualComponentProps?.variableForQuery is undefined`);
    }

    // detect if urlPath is a GUID and if so use variablesById
    if(individualComponentProps?.component?.udi && isGuid(individualComponentProps?.component?.udi)){
      const idVar = variablesById(individualComponentProps?.component?.udi);
      log.trace(`${logPrefix()}[model][variables][${individualComponentProps.page.source}][${individualComponentProps.page.preliminarySlug}]  idVar ::: `, idVar);
      return idVar;
    }

    log.trace(`${logPrefix()}[model][variables][${individualComponentProps.page.source}][${individualComponentProps.page.preliminarySlug}]  backendSlug ::: ${thisBackendSlug}`);
    log.trace(`${logPrefix()}[model][variables][${individualComponentProps.page.source}][${individualComponentProps.page.preliminarySlug}] languageSite: `, individualComponentProps.page.languageSite);

    let variables = variablesMultiSiteSlug(thisBackendSlug as string, individualComponentProps?.page?.languageSite);
    log.trace(`${logPrefix()}[model][variables][${individualComponentProps.page.source}][${individualComponentProps.page.preliminarySlug}] variables: `, variables);
    return variables;
  } catch (err) {
    log.error(`${logPrefix()}[model][variables][${individualComponentProps.page.source}][${individualComponentProps.page.preliminarySlug}] -- error in variables function`, err, (err as any).stack)
    // throw new Error(`${logPrefix()}[model][variables][${IndividualComponentProps.page.source}][${IndividualComponentProps.page.preliminarySlug}] -- error in variables function`);
  }
}
