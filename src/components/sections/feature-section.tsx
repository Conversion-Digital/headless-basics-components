import React from "react";
import Image from "next/image";
import InlineSVG from "./InlineSVG";

import { getSectionAlign } from "../../utils/sectionAlign";
import { cnm as cn } from "../../utils/cnMerge";;
import { parseText, stripAndUpdateTags } from "../../utils/string";
interface FeatureCardProps {
  children?: React.ReactNode;
  imageSrc: string;
  title: string;
  description?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  wrapperClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  useNextImage?: boolean;
  renderCTA?: () => React.ReactNode;
  altText: string;
  feature?: string;
}

export interface FeatureSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  innerClassName?: string;
  children?: React.ReactNode;
  data?: any;
}

const FeatureSection = ({ children, className = "", innerClassName = "", ...rest }: FeatureSectionProps) => {
  return (
    <section className={cn(`py-12 sm:py-16 md:py-20 ${className}`)} {...rest}>
      <div className={cn("container mx-auto px-4", innerClassName)}>{children}</div>
    </section>
  );
};

const FeatureSectionHeadline = ({ children, className, align }: { children: React.ReactNode; className?: string; align?: string }) => {
  return (
    <h2 className={cn("mb-4 text-center text-3xl font-800 sm:text-4xl md:text-5xl", className, getSectionAlign(align || "", "text-center"))}>
      {children}
    </h2>
  );
};

const FeatureSectionDescription = ({ children, className, align }: { children: React.ReactNode; className?: string; align?: string }) => {
  return <p className={cn("max-w-xl text-center", className, getSectionAlign(align || "", "text-center"))}>{children}</p>;
};

const FeatureCard = ({
  imageWidth,
  imageHeight,
  imageSrc,
  title,
  description,
  className,
  wrapperClassName,
  imageClassName,
  titleClassName,
  descriptionClassName,
  useNextImage = true,
  renderCTA,
  children,
  altText,
  feature,
}: FeatureCardProps) => {
  const ImageComponent = useNextImage ? Image : "img";
  return (
    <div className={cn("flex! h-full flex-col items-center justify-between", wrapperClassName)}>
      <div className={cn("relative m-2 grid place-items-center", className)}>
        {imageSrc && imageSrc?.endsWith(".svg") ? (
          <div className={cn("h-16 object-contain text-my-black hover:text-my-yellow", imageClassName)}>
            <InlineSVG src={imageSrc} width={imageWidth ?? 350} height={imageHeight ?? 350} alt={altText} />
          </div>
        ) : (
          imageSrc && (
            <ImageComponent
              className={cn("h-16 object-contain", imageClassName)}
              alt={altText}
              src={imageSrc}
              loading="lazy"
              quality={75}
              width={imageWidth ?? 350}
              height={imageHeight ?? 350}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
            />
          )
        )}

        <h4 className={cn("my-4", titleClassName)}>{title}</h4>
        <p className={cn("text-center", descriptionClassName)}>{parseText(description as string).text}</p>
        {feature ? (
          <div
            dangerouslySetInnerHTML={{
              __html: <>{stripAndUpdateTags(feature)}</>,
            }}
          />
        ) : null}
        {children}
      </div>
      {renderCTA ? renderCTA() : null}
    </div>
  );
};

export default Object.assign(FeatureSection, {
  Headline: FeatureSectionHeadline,
  Description: FeatureSectionDescription,
  Card: FeatureCard,
});

