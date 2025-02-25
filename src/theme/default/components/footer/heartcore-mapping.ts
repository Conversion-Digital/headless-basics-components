import { PageAndSingleComponentDetails, processRawUrlsOnServer } from "@conversiondigital/cd-headless-data/src";

export async function mapIdentifierData(IndividualComponentProps: PageAndSingleComponentDetails) {
  const responseData = IndividualComponentProps?.component?.data?.content;
  const languageSite = IndividualComponentProps?.page?.languageSite;
  
  if (responseData && languageSite) {
    await processRawUrlsOnServer(responseData, languageSite);
  }
  return responseData;
}
