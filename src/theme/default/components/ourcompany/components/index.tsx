import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import DefaultVariant from "./variants/default";
import DemoVariant from "./variants/demoVariant";

export function OurCompanyIndex(props: StandardComponentProps) {
  const variant =
    props?.componentInformation?.metaData?.variant?.toLowerCase() || "default";

  if (variant === "demo") {
    return <><DemoVariant {...props} /> </>;
  }
  return <><DefaultVariant {...props} /></>;
}