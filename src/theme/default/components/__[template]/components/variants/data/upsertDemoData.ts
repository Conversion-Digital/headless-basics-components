import { demoVariantData } from "./demoVariantData";
import { 
  fetchAPIGatewayWrapperForSanityMutations, 
  fetchMutationAPI, 
  fetchAPI 
} from "@conversiondigital/headless-basics-data/src/services/data/cmsDataQueryGateway";
import { logPrefix } from "@conversiondigital/headless-basics-data/src/utils/logPrefix";
import { getLogger } from "@conversiondigital/headless-basics-data/src/services/logging/LogConfig";
import { getPageByTitle } from "@conversiondigital/headless-basics-data/src";
import { v4 as uuidv4 } from 'uuid';

const log = getLogger("components.template.upsertDemoData");

/**
 * Searches for a page named the same as the component. 
 * If found, the upsert is skipped.
 * If not found, creates a new page and a new component (of type "templateComponentGlobal")
 * and adds a reference to the component within the page.
 */
export async function upsertDemoDataIfBlank() {
  if (process.env.ENABLE_SANITY_UPSERTS !== "true") {
      log.info(
        `${logPrefix()} Sanity upserts are disabled. Set ENABLE_SANITY_UPSERTS=true to enable.`
      );
    return;
  }

  // Get the Sanity endpoint (assumed to work for both queries and mutations).
  const endpoint = await fetchAPIGatewayWrapperForSanityMutations();

  log.info(`${logPrefix()} Sanity upserts enabled. Starting upsert...`);

  // Define the component name that we use for both the component _type and page title.
  const componentName = "hero";

  try{
    log.info(`${logPrefix()} Starting upsert mutation...`);
    // Search for the page.
    const pageResult = await getPageByTitle(componentName, componentName);

    log.info(`${logPrefix()} Page search result:`, pageResult);

    // If the page already exists, log and skip the upsert.
    if (pageResult && pageResult?.allPage?.length > 0) {
      log.info(
        `${logPrefix()} Page with title "${componentName}" found. Skipping upsert.`
      );
      return;
    }

    log.info(`${logPrefix()} Page with title "${componentName}" not found. Proceeding with upsert...`);

    // If no page is found, prepare to create both a new component and a new page.
    // Generate unique document IDs for both documents.
    const componentDocId = uuidv4();
    const pageDocId = uuidv4();

    // Build the mutation payload with two operations:
    // 1) Create the component (using the demo data).
    // 2) Create the page with its title set to the component name and a reference to the new component.
    const mutationPayload = {
      mutations: [
        {
          create: {
            _id: componentDocId,
            _type: componentName,
            selectableVariant: demoVariantData.variant || "",
            title: demoVariantData.title || "",
            heading: demoVariantData.heading || "",
            subtitle: demoVariantData.subtitle || "",
            sortOrder: demoVariantData.sortOrder || 0,
          },
        },
        {
          create: {
            _id: pageDocId,
            _type: "page",
            title: componentName,
            parent: {
                  _type: "reference",
                  _ref: "5bbfcbb4-84f3-4301-bc56-8345160d0cb9", // Library page ID
                },
            slug: 
            {
                __typename: "Slug",
                _key: null,
                current: `${componentName}`,
                source: null
            },
            components: [
              {
                _type: "reference",
                _ref: componentDocId,
              },
            ],
          },
        },
      ],
    };

    log.info(`${logPrefix()} Mutation payload:`, mutationPayload);

    // Execute the mutation using the fetchMutationAPI function.
    const mutationResult = await fetchMutationAPI(
      mutationPayload,
      endpoint,
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
      }
    );
    log.info(`${logPrefix()} Upsert mutation result:`, mutationResult);
  } catch (error) {
    log.error(`${logPrefix()} Error in upsertDemoDataIfBlank: ${error}`);
  }
  log.info(`${logPrefix()} Upsert mutation result completed`);

}