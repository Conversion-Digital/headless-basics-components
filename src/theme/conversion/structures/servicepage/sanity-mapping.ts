import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils";

export const log = getLogger("conversion.structures.sanity.servicepage.mapping");

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started`
  );
  
  const content = pageAndComponentCombo?.component?.data;
  const servicePage = content?.allServicePage && Array.isArray(content.allServicePage) ? content.allServicePage[0] : null;
  
  if (!servicePage) {
    log.warn(`${logPrefix()} No ServicePage data found`);
    return null;
  }
  
  // Find the components by type
  const serviceIntroComponent = servicePage.components?.find((comp: any) => comp.__typename === 'Cdserviceintro');
  const serviceStatsComponent = servicePage.components?.find((comp: any) => comp.__typename === 'Cdservicestats');
  const serviceOfferingsComponent = servicePage.components?.find((comp: any) => comp.__typename === 'Cdserviceofferings');
  const serviceDetailComponent = servicePage.components?.find((comp: any) => comp.__typename === 'Cdservicedetail');
  
  // Process the service intro component
  let serviceIntroData = null;
  if (serviceIntroComponent) {
    const hasGlobal = serviceIntroComponent.globalComponentSource;
    serviceIntroData = {
      title: serviceIntroComponent.title || (hasGlobal?.title || ''),
      content: serviceIntroComponent.content || (hasGlobal?.content || ''),
      selectableVariant: serviceIntroComponent.selectableVariant || (hasGlobal?.selectableVariant || 'default')
    };
  }
  
  // Process the service stats component
  let serviceStatsData = null;
  if (serviceStatsComponent) {
    const hasGlobal = serviceStatsComponent.globalComponentSource;
    serviceStatsData = {
      stats: serviceStatsComponent.stats && serviceStatsComponent.stats.length > 0
        ? serviceStatsComponent.stats
        : (hasGlobal?.stats || []),
      selectableVariant: serviceStatsComponent.selectableVariant || (hasGlobal?.selectableVariant || 'default')
    };
  }
  
  // Process the service offerings component
  let serviceOfferingsData = null;
  if (serviceOfferingsComponent) {
    const hasGlobal = serviceOfferingsComponent.globalComponentSource;
    serviceOfferingsData = {
      title: serviceOfferingsComponent.title || (hasGlobal?.title || ''),
      intro: serviceOfferingsComponent.intro || (hasGlobal?.intro || ''),
      offerings: serviceOfferingsComponent.offerings && serviceOfferingsComponent.offerings.length > 0
        ? serviceOfferingsComponent.offerings.map((offering: any) => ({
            title: offering.title,
            icon: offering.icon,
            id: offering.id?.current
          }))
        : (hasGlobal?.offerings?.map((offering: any) => ({
            title: offering.title,
            icon: offering.icon,
            id: offering.id?.current
          })) || []),
      selectableVariant: serviceOfferingsComponent.selectableVariant || (hasGlobal?.selectableVariant || 'default')
    };
  }
  
  // Process the service detail component
  let serviceDetailData = null;
  if (serviceDetailComponent) {
    const hasGlobal = serviceDetailComponent.globalComponentSource;
    serviceDetailData = {
      services: serviceDetailComponent.services && serviceDetailComponent.services.length > 0
        ? serviceDetailComponent.services.map((service: any) => ({
            title: service.title,
            id: service.id?.current,
            content: service.content
          }))
        : (hasGlobal?.services?.map((service: any) => ({
            title: service.title,
            id: service.id?.current,
            content: service.content
          })) || []),
      selectableVariant: serviceDetailComponent.selectableVariant || (hasGlobal?.selectableVariant || 'default')
    };
  }
  
  return {
    serviceIntroData,
    serviceStatsData,
    serviceOfferingsData,
    serviceDetailData,
    defaultActiveServiceId: serviceOfferingsData?.offerings?.[0]?.id
  };
} 