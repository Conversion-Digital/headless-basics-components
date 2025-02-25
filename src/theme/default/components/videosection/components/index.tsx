import DevButton from "../../../../../components/developer/devButton"
import { alignmentClasses, getLogger, IndividualComponentProps, replaceString, ViewComponentProps } from "@conversiondigital/headless-basics-data/src"
import { Key, Suspense } from "react"
import { getSectionBackgroundColour } from "../../../../utils/getSectionBackgroundColour"

const log = getLogger("theme.components.videosection.components.index")

function getVideoIDfromURL(url: string) {
  // Regular expression pattern to match YouTube video ID
  const pattern =
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/

  // Extract the video ID using match() and the pattern
  const matches = url.match(pattern)
  const videoId = matches && matches[1]
  return videoId
}

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="w-full" id={videoId}>
      <iframe
        title="YouTube Video"
        className="aspect-video h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
interface VideoSectionProps {
  id?: string;
  title: string;
  description: string;
  videoLink: { url: string }[];
  bgColour: string;
  align?: string;
}

const VideoSection = ({ id, title, description, videoLink, bgColour, align }: VideoSectionProps) => {
  const { alignItemsClass, textAlignClass } = alignmentClasses({
    align: align || "left",
  })

  if(id)
    id = "id-"+replaceString(id, "-", "");

  return (
    <section id={id} className={`py-20 odd:bg-white md:py-32 ${bgColour}`}>
      <div className={`container flex flex-col ${alignItemsClass}`}>
        <h2
          className={`mb-5 text-h4 font-extrabold leading-h4 text-my-blue md:mb-8 md:text-h3 md:leading-h3 ${textAlignClass}`}
        >
          {title}
        </h2>
        <p className={`mb-8 text-sm text-my-black ${textAlignClass}`}>
          {description}
        </p>
        {videoLink.map((video: { url: string }, index: Key | null | undefined) => (
          <YouTubeEmbed key={index} videoId={getVideoIDfromURL(video.url) || ''} />
        ))}
      </div>
    </section>
  )
}

export default function VideoSectionUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to videoSectionComponent", componentDetails);
    return <div>Error rendering videoSectionComponent: Missing data</div>;
  }
  const data = componentDetails;
  populateMetaData(data)
  let matchingData = componentDetails.data;

  if (!matchingData) {
    matchingData = {}
  }
  const backgroundColour = data?.data?.backgroundColour;
  return (
    <>
      <div className={`relative w-full`}>
        <Suspense>
          <DevButton metaData={componentDetails.metaData} />
        </Suspense>
        <VideoSection
          id={typeof matchingData?.id === 'string' ? matchingData.id : undefined}
          title={typeof matchingData.title === 'string' ? matchingData.title : ''}
          description={typeof matchingData.description === 'string' ? matchingData.description : ''}
          bgColour={getSectionBackgroundColour(backgroundColour as string, "")}
          videoLink={Array.isArray(matchingData.videoLink) ? matchingData.videoLink : []}
          align={typeof matchingData.align === 'string' ? matchingData.align : undefined}
        />
      </div>
    </>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData){
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/videosection/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "VideoSectionUI"
  }
}
