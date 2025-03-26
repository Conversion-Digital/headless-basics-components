import { demoVariantData } from "./demoVariantData";
import { 
  fetchAPIGatewayWrapperForSanity, 
  fetchMutationAPI, 
  fetchAPI 
} from "@conversiondigital/headless-basics-data/src/services/data/cmsDataQueryGateway";
import { logPrefix } from "@conversiondigital/headless-basics-data/src/utils/logPrefix";
import { getLogger } from "@conversiondigital/headless-basics-data/src/services/logging/LogConfig";

const log = getLogger("components.template.upsertDemoData");

/**
 * Searches for a page named the same as the component. 
 * If found, the upsert is skipped.
 * If not found, creates a new page and a new component (of type "templateComponentGlobal")
 * and adds a reference to the component within the page.
 */
export async function upsertDemoDataIfBlank() {
  if (process.env.ENABLE_SANITY_UPSERTS !== "true") {
    return;
  }

  // Get the Sanity endpoint (assumed to work for both queries and mutations).
  const endpoint = await fetchAPIGatewayWrapperForSanity();

  // Define the component name that we use for both the component _type and page title.
  const componentName = "templateComponentGlobal";

  // Build a GROQ query to search for a page with the same title as the component.
  const pageQuery = '*[_type == "page" && title == $title][0]';
  const queryVariables = { title: componentName };
  const queryDetails = {
    queryResult: pageQuery,
    variables: queryVariables,
    matchingPath: "page-search",
    cmsPrefix: "default",
    identifier: "templateComponentGlobal",
    failedToFind: false,
    queryString: pageQuery,
    siteId: "default-site",
  };

  // Search for the page.
  const pageResult = await fetchAPI(
    queryDetails,
    endpoint,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    }
  );

  // If the page already exists, log and skip the upsert.
  if (pageResult) {
    log.trace(
      `${logPrefix()} Page with title "${componentName}" found. Skipping upsert.`
    );
    return;
  }

  // If no page is found, prepare to create both a new component and a new page.
  // Generate unique document IDs for both documents.
  const componentDocId = `${componentName}-${Date.now()}`;
  const pageDocId = `page-${componentName}-${Date.now()}`;

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

  // Execute the mutation using the fetchMutationAPI function.
  const mutationResult = await fetchMutationAPI(
    mutationPayload,
    endpoint,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    }
  );

  log.trace(`${logPrefix()} Upsert mutation result:`, mutationResult);
  return mutationResult;
}
