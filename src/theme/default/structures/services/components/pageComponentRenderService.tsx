import { getLogger } from "@conversiondigital/cd-headless-data";
import { detectAndRenderProductDetails } from "../ecommerce/ecommerceRenderService";
import { PageBlueprint } from "@conversiondigital/cd-headless-data/src/interfaces"

const log = getLogger("headless.services.components.pageComponentRenderService");
export function renderComponentContent(bluePrint:PageBlueprint) {
  let productRendering = detectAndRenderProductDetails(bluePrint);
  return (
    <>
    {productRendering}
    </>
  );
}
