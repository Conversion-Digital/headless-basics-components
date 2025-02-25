import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src"

const log = getLogger("theme.components.alias.mapping");

export function mapIdentifierData(IndividualComponentProps: PageAndSingleComponentDetails) {
    log.trace(`${logPrefix()}[mapIdentifierData] started `, IndividualComponentProps?.component?.data);
    const content = IndividualComponentProps?.component.data?.content as any;
    return content?.superAlias;
}
