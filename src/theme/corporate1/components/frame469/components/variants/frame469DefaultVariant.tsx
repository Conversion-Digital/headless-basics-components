
import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";

const Frame469DefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const {
    title,
    heading,
    description,
    ctaLabel,
    ctaLink,
    phone,
    fax,
    email,
    addressLine1,
    addressLine2,
    showMap
  } = matchingData || {};

  return (
    <section className="max-w-5xl mx-auto p-6 bg-white text-gray-800 border border-gray-200 shadow-sm rounded-md">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="md:w-2/3">
          {heading && <h2 className="text-2xl font-bold mb-2">{heading}</h2>}
          {description && <p className="text-sm text-gray-700 mb-4">{description}</p>}
          {ctaLabel && (
            <a
              href={ctaLink || "#"}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              {ctaLabel}
            </a>
          )}
        </div>
        <div className="md:w-1/3 flex flex-col gap-2">
          {phone && (
            <div className="text-sm">
              <span className="font-semibold">Phone: </span>{phone}
            </div>
          )}
          {fax && (
            <div className="text-sm">
              <span className="font-semibold">Fax: </span>{fax}
            </div>
          )}
          {email && (
            <div className="text-sm">
              <span className="font-semibold">Email: </span>
              <a className="underline hover:text-blue-600" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          )}
          {(addressLine1 || addressLine2) && (
            <div className="text-sm">
              <span className="font-semibold">Office Location: </span>
              <div>
                {addressLine1}{addressLine1 && <br />}
                {addressLine2}
              </div>
            </div>
          )}
          {showMap && (
            <div className="mt-2 text-xs italic text-gray-500">
              Map would be shown here...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Frame469DefaultVariant;
