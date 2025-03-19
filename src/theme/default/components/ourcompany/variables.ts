import { standardVariables } from "@conversiondigital/headless-basics-data/src/services/data/graphql/graphqlVariablesService";
import type { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces/PageDefinition";

export function variables(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return standardVariables(pageAndComponentCombo);
}