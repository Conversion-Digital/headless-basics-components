import React from "react";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";
import { getLogger } from "@conversiondigital/headless-basics-data/src";
import { Toggle } from "../../../../../../components/toggle";
import { Button } from "../../../../../../components/button";

const log = getLogger("default.components.sanity.gridblock.variants");

const ToggleComponent = ({ item }: any) => (
  <Toggle
    text={item.text || "Toggle"}
    ariaLabel={item.aRIALabel || "Toggle Button"}
    showIcon={item.showIcon || false}
    variant={item.variant || "default"}
    className={item.className}
  />
);

const TextBlockComponent = ({ item }: any) => (
  <div className="text-block">
    {item.title && <h3 className="text-xl font-semibold mb-2">{item.title}</h3>}
    {item.subtitle && <h4 className="text-lg text-gray-600 mb-2">{item.subtitle}</h4>}
    {item.text && <div className="prose max-w-none">{typeof item.text === "string" ? <p>{item.text}</p> : <div>{item.text}</div>}</div>}
  </div>
);

const HeroComponent = ({ item }: any) => {
  const backgroundImageUrl = item.backgroundImage?.asset?.url || "";

  return (
    <div
      className="hero min-h-[250px] rounded-lg overflow-hidden flex flex-col justify-center"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`hero-content text-center ${backgroundImageUrl ? "text-white" : "text-black"}`}>
        <div className="max-w-md">
          {item.title && <h2 className="text-2xl font-bold mb-2">{item.title}</h2>}
          {item.heading && <h3 className="text-xl font-semibold mb-1">{item.heading}</h3>}
          {item.subtitle && <p className="mb-4">{item.subtitle}</p>}

          {item.button && item.button.label && (
            <Button variant="default" onClick={() => (item.button?.url ? window.open(item.button.url, "_blank") : null)}>
              {item.button.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const MottoComponent = ({ item }: any) => {
  const textAlign = item.align && ["left", "center", "right"].includes(item.align) ? (item.align as "left" | "center" | "right") : "center";

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`motto ${alignmentClasses[textAlign]}`}>
      {item.words && (
        <blockquote className="text-xl font-medium italic text-gray-800 p-4 border-l-4 border-gray-300 bg-gray-50 rounded">
          "{item.words}"
        </blockquote>
      )}
    </div>
  );
};

const getItemKey = (item: any, index: number, gridblockId: string): string => {
  const itemId = item._key || item.id || item._id || item.metaData?.id || `item-${index}`;

  return `${gridblockId}-item-${itemId}`;
};

const createUniqueGridId = (props: StandardComponentProps): string => {
  const { matchingData, componentInformation } = props;

  const originalKey = matchingData?._key;
  const originalId = matchingData?._originalKey || originalKey;

  if (originalId) {
    console.log(`🔑 Using original key from Sanity for GridBlock: ${originalId}`);
    return originalId;
  }

  const idParts = [
    matchingData?._id,
    matchingData?.title,
    matchingData?.metaData?.id,
    componentInformation?.id,
    componentInformation?.sortOrder,
    matchingData?.sortOrder,
  ].filter(Boolean);

  if (idParts.length > 0) {
    return `gridblock-${idParts.join("-")}`;
  }

  return `gridblock-${Math.random().toString(36).substr(2, 9)}`;
};

export default function GridblockDefaultVariant(props: StandardComponentProps) {
  const { matchingData, componentInformation, blueprint } = props;

  const uniqueGridId = createUniqueGridId(props);

  const title = matchingData?.title || "";
  const blockId = uniqueGridId;

  const gridItems =
    matchingData?.gridComponents || matchingData?.componentsGrid || matchingData?.globalComponentSource?.componentsGrid || [];

  const getFlexClasses = (itemCount: number) => {
    if (itemCount <= 1) return "w-full";

    if (itemCount === 2) return "w-full md:w-1/2";

    if (itemCount === 3) return "w-full md:w-1/3";

    if (itemCount === 4) return "w-full md:w-1/2 lg:w-1/4";

    return "w-full md:w-1/2 lg:w-1/3";
  };

  if (!gridItems || gridItems.length === 0) {
    log.debug(`No grid items found to render for blockId: ${blockId}`);
    return null;
  }

  const flexClass = getFlexClasses(gridItems.length);

  // Ensure each grid item has a truly unique identifier
  const processedGridItems = gridItems.map((item: any, index: number) => {
    const itemType = item._type || item.contentTypeAlias;
    // If no _key exists, create one
    if (!item._key) {
      item._key = `${blockId}-item-${index}-${item.title || "no-title"}-${Math.random().toString(36).substring(2, 7)}`;
    }

    return {
      ...item,
      _gridBlockId: blockId,
      _index: index,
    };
  });

  return (
    <section className="py-8" data-blockid={blockId} id={blockId.replace(/[^a-zA-Z0-9-_]/g, "-")}>
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {processedGridItems.map((item: any, index: number) => {
            const itemKey = `${blockId}-item-${index}-${item._key || item.id || "unknown"}`;

            const itemType = item._type || item.contentTypeAlias;

            return (
              <div key={itemKey} className={`px-4 mb-8 ${flexClass}`} data-itemid={item._key || item.id || item._id}>
                <div className="h-full bg-white rounded-lg shadow-sm p-6 flex flex-col">
                  {item && (
                    <>
                      {(itemType === "toggle" || itemType === "Toggle") && <ToggleComponent item={item} />}

                      {(itemType === "textBlock" || itemType === "TextBlock") && <TextBlockComponent item={item} />}

                      {(itemType === "hero" || itemType === "Hero") && <HeroComponent item={item} />}

                      {(itemType === "motto" || itemType === "Motto") && <MottoComponent item={item} />}

                      {!["toggle", "textBlock", "hero", "motto", "Toggle", "TextBlock", "Hero", "Motto"].includes(itemType) && (
                        <div>
                          <p>Unknown component type: {itemType}</p>
                          <pre className="text-sm bg-gray-100 p-2 rounded overflow-auto">{JSON.stringify(item, null, 2)}</pre>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
