import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";

export default function CtafooterDefaultVariant(props: StandardComponentProps) {
  const heading = props?.matchingData?.heading || "Let's Talk";
  const description = props?.matchingData?.description || "Every project starts with a chat. We'll be happy to discuss your project.";
  const email = props?.matchingData?.email || "hello@buuuk.com";
  const phone = props?.matchingData?.phone || "+65 98735984";
  const address = props?.matchingData?.address || "1 Example Street";
  const ctaLabel = props?.matchingData?.ctaLabel || "Tell us about your project";
  const ctaLink = props?.matchingData?.ctaLink || "#";

  return (
    <section className="w-full bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-base mb-6">{description}</p>
          <a
            href={ctaLink}
            className="inline-block bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            {ctaLabel}
          </a>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          {email && (
            <p className="text-base">
              <span className="font-semibold">Email: </span>
              <a href={`mailto:${email}`} className="underline hover:text-green-300">{email}</a>
            </p>
          )}
          {phone && (
            <p className="text-base">
              <span className="font-semibold">Phone: </span>
              <a href={`tel:${phone}`} className="underline hover:text-green-300">{phone}</a>
            </p>
          )}
          {address && (
            <p className="text-base">
              <span className="font-semibold">Address: </span>
              {address}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};