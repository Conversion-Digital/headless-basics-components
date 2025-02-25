import { getLogger, PageBlueprint } from "@conversiondigital/headless-basics-data/src";
import { detectAndRenderProductDetails } from "../ecommerce/ecommerceRenderService";


const log = getLogger("headless.services.components.pageComponentRenderService");
export function renderComponentContent(bluePrint:PageBlueprint) {
  let productRendering = detectAndRenderProductDetails(bluePrint);
  return (
    <>
    {productRendering}
    </>
  );
}
