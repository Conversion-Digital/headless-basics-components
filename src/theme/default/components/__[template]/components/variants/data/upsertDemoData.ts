import { demoVariantData } from "./demoVariantData";
import { fetchAPIGatewayWrapperForSanity, fetchMutationAPI } from "@conversiondigital/headless-basics-data/src/services/data/cmsDataQueryGateway";
import { logPrefix } from "@conversiondigital/headless-basics-data/src/utils/logPrefix";
import { getLogger } from "@conversiondigital/headless-basics-data/src/services/logging/LogConfig";

const log = getLogger("components.template.upsertDemoData");

/**
 * Upserts demo data for the heroComponentGlobal document using Sanity’s HTTP mutation API.
 * This version builds a JSON payload with a createOrReplace mutation and uses fetchMutationAPI.
 *
 * @param docId - The CMS Document ID for this component.
 * @param existingResult - The existing data returned from the CMS for this document.
 */
export async function upsertDemoDataIfBlank(docId: string, existingResult: any) {
  try {
    // Check if a variant is already selected or if key fields have content.
    const isVariantSelected = !!existingResult?.selectableVariant;
    const isAnyFieldPopulated =
      !!existingResult?.title ||
      !!existingResult?.heading ||
      !!existingResult?.subtitle;

    if (isVariantSelected || isAnyFieldPopulated) {
      log.trace(`${logPrefix()} No upsert needed as fields are populated.`);
      return;
    }

    log.trace(`${logPrefix()} Fields are blank; upserting demo data...`);

    // Build the mutation payload as a JSON object.
    const mutationPayload = {
      mutations: [
        {
          createOrReplace: {
            _id: docId,
            _type: "templateComponentGlobal", // update this to component type
            selectableVariant: demoVariantData.variant || "",
            title: demoVariantData.title || "",
            heading: demoVariantData.heading || "",
            subtitle: demoVariantData.subtitle || "",
            sortOrder: demoVariantData.sortOrder || 0,
          },
        },
      ],
    };

    // Retrieve the Sanity API endpoint.
    const endpoint = await fetchAPIGatewayWrapperForSanity();

    // Call the mutation endpoint using the new fetchMutationAPI function.
    const mutationResult = await fetchMutationAPI(
      mutationPayload,
      endpoint,
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`, // Adjust token source if needed.
      }
    );

    log.trace(`${logPrefix()} Upsert mutation result:`, mutationResult);
    return mutationResult;
  } catch (error) {
    log.error(`${logPrefix()} Error upserting demo data:`, error);
    throw error;
  }
}
