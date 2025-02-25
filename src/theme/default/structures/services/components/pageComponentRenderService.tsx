import { getLogger } from "@conversiondigital/headless-basics-data";
import { detectAndRenderProductDetails } from "../ecommerce/ecommerceRenderService";
import { PageBlueprint } from "@conversiondigital/headless-basics-data/src/interfaces"

const log = getLogger("headless.services.components.pageComponentRenderService");
export function renderComponentContent(bluePrint:PageBlueprint) {
  let productRendering = detectAndRenderProductDetails(bluePrint);
  return (
    <>
    {productRendering}
    </>
  );
}
