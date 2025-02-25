import FeatureSection from "../../../../../../components/sections/feature-section";

interface DownloadContent {
  heading: string;
  buttonText: string;
  media: {
    url: string;
  };
  image: {
    url: string;
    media: {
      altText: string;
      name: string;
    };
  };
}

interface IconDownloadCTAProps {
  data: {
    downloads: {
      content: DownloadContent;
    }[];
  };
}

export const IconDownloadCTA = ({ data }: IconDownloadCTAProps) => {
  return (
    <FeatureSection
      id="downloads"
      className="py-6 font-urbanist text-my-blue sm:py-8 md:py-10"
    >
      <div className="flex flex-wrap justify-evenly justify-items-center px-2 *:mb-4 *:w-full sm:*:w-3/6 md:*:w-2/6">
        {data?.downloads?.map(({ content }, index) => (
          <FeatureSection.Card
            key={index}
            titleClassName="text-h5 font-800 leading-h5"
            imageSrc={content?.image?.url}
            title={content.heading}
            altText={
              content?.image?.media?.altText != ""
                ? content?.image?.media?.altText
                : content?.image?.media?.name != ""
                ? content?.image?.media?.name
                : content?.heading
            }
            imageHeight={65}
            imageWidth={65}
            renderCTA={() => (
              <a
                href={content?.media?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-my-yellow px-4 py-2 text-center text-h5 font-800 uppercase leading-h5 tracking-0.1em transition hover:bg-my-brown-grey hover:text-my-white sm:px-6"
              >
                {content?.buttonText}
              </a>
            )}
          />
        ))}
      </div>
    </FeatureSection>
  )
}
