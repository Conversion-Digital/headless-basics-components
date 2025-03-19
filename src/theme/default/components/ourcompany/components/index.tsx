import React from "react";
import type { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import DefaultOurCompany from "./variants/DefaultOurCompany";

export default function OurCompanyIndex(props: StandardComponentProps) {
  const { variant } = props.componentInformation.metaData || {};

  switch (variant) {
    default:
      return <DefaultOurCompany {...props} />;
  }
}