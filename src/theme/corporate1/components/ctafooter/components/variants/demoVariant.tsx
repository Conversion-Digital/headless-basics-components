import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

export default function DemoVariant(props: StandardComponentProps) {
  const heading = props?.matchingData?.heading || demoVariantData.heading;
  const description = props?.matchingData?.description || demoVariantData.description;
  const email = props?.matchingData?.email || demoVariantData.email;
  const phone = props?.matchingData?.phone || demoVariantData.phone;
  const address = props?.matchingData?.address || demoVariantData.address;
  const ctaLabel = props?.matchingData?.ctaLabel || demoVariantData.ctaLabel;
  const ctaLink = props?.matchingData?.ctaLink || demoVariantData.ctaLink;

  return (
    <section className="bg-gray-200 p-6">
      <h2 className="text-2xl font-bold mb-2">{heading}</h2>
      <p className="mb-4">{description}</p>
      <p className="mb-1"><strong>Email: </strong>{email}</p>
      <p className="mb-1"><strong>Phone: </strong>{phone}</p>
      <p className="mb-1"><strong>Address: </strong>{address}</p>
      <a
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded"
        href={ctaLink}
      >
        {ctaLabel}
      </a>
    </section>
  );
};