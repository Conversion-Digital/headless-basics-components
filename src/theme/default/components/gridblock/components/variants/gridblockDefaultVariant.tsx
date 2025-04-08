import React from "react";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";

export default function GridblockDefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const title = matchingData?.title || "GridBlock Default Title";
  const intro = matchingData?.intro || "Default introduction text for the grid block.";
  const items = matchingData?.items || [];

  return (
    <section className="p-5 bg-gray-50">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
    </section>
  );
}