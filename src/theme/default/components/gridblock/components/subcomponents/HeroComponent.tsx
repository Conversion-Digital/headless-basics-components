import React from "react";
import { Button } from "../../../../../../components/button";

interface HeroComponentProps {
  item: {
    title?: string;
    heading?: string;
    subtitle?: string;
    backgroundImage?: {
      asset?: {
        url?: string;
        _id?: string;
      };
    };
    button?: {
      label?: string;
      url?: string;
    };
    [key: string]: any;
  };
}

export const HeroComponent: React.FC<HeroComponentProps> = ({ item }) => {
  const backgroundImageUrl = item.backgroundImage?.asset?.url || "";

  return (
    <div
      className="hero min-h-[250px] rounded-lg overflow-hidden flex flex-col justify-center"
      style={{
        backgroundImage: backgroundImageUrl ? `url('${backgroundImageUrl}')` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`hero-content text-center ${backgroundImageUrl ? "text-white" : "text-black"}`}>
        <div className="max-w-md">
          <img src={backgroundImageUrl} alt={item.title} />
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
