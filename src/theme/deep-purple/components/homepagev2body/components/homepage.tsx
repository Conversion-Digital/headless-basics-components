import React, { Suspense } from "react"
import Image from "next/image"

import { cn, getLogger, parseText } from "@conversiondigital/headless-basics-data"

import { StandardComponentProps } from "../../../../../interfaces/standardComponentProps"
import { parseBulletPoints, parseHeadingWithHighlights, parseWithHighlight } from "../utils"

const log = getLogger("theme.components.accordion.components.Homepage")

export const Homepage: React.FC<StandardComponentProps> = ({ blueprint, componentDetails, matchingData }) => {
  return (
    <>
      <main className="bg-off-white pb-1 text-black">
        <section className="mt-16 sm:mt-24">
          <div className="h-[150%] -skew-y-12 bg-orange-500 text-dark-gray sm:-skew-y-6">
            <h1 className="container mx-auto px-6 skew-y-12 px-4 pt-12 max-sm:pb-6 sm:skew-y-6 sm:px-24 sm:pt-24 ">
              <span className="inline-block w-full max-w-(--breakpoint-lg) text-left text-4xl font-bold leading-tight sm:text-6xl md:text-[90px]">
                {parseHeadingWithHighlights(matchingData.headingOne)}
              </span>
            </h1>
          </div>

          <div className="container my-28 px-4 sm:my-40 sm:px-8">
            <h2 className="mb-4 max-w-(--breakpoint-md) text-2xl font-bold leading-snug tracking-[-0.84px] text-dark-gray sm:text-[45px] sm:leading-snug">
              {parseWithHighlight(
                matchingData.headingTwo,
                "unlocking human expertise",
                "bg"
              )}
            </h2>
          </div>
        </section>

        <section className="container flex flex-col items-start justify-between px-4 sm:flex-row sm:px-8">
          <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pr-16">
            <p className="mb-6 text-xl leading-relaxed sm:text-[28px]">
              {matchingData.blockThreeParagraph}
            </p>
            <p className="text-xl text-gray-600">
              {parseText(matchingData.blockThreeP2).text}
            </p>
          </div>
        </section>

        <section className="mt-16 bg-gradient-dark pb-24 text-white">
          <div className="container relative grid grid-cols-1 justify-items-end gap-12 px-4 sm:grid-cols-2 sm:gap-x-24 sm:gap-y-0 sm:px-8">
            <div className="relative z-10 h-max max-w-md bg-white text-dark-gray shadow-lg max-sm:row-start-2 sm:left-2/4 sm:my-16">
              <ul className="space-y-4 p-6 [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-[#F4F1F1] [&>li:not(:last-child)]:pb-4">
                {parseBulletPoints(matchingData.blockThreeBullets)}
              </ul>
            </div>

            <div className="relative aspect-9/16 w-full overflow-hidden max-sm:mt-12 sm:max-h-[600px] sm:max-w-[487px] sm:translate-y-[-35%]">
              <Image
                src={matchingData.blockThreeImage.url}
                alt="Block Three Image"
                className="h-full w-full object-cover object-top"
                quality={100}
                fill
                loading="lazy"
              />
            </div>
            <div className="relative aspect-9/16 max-h-[400px] w-full overflow-hidden sm:max-h-[600px] sm:max-w-[487px]">
              <Image
                src={matchingData.blockFourImage.url}
                alt="Block Four Image"
                className="h-full w-full object-cover object-top"
                quality={100}
                fill
                loading="lazy"
              />
            </div>
            <div className="flex h-max flex-col justify-center max-sm:row-start-4">
              <div className="mb-12 sm:my-16">
                <h2 className="font-helvetica text-xl font-normal leading-snug tracking-[-0.84px] text-white sm:text-[28px]">
                  {parseText(matchingData.blockFourParagraph).text}
                </h2>
              </div>
              <div className="relative max-w-md bg-white p-6 text-black shadow-lg sm:-left-1/4 sm:my-16">
                <ul className="space-y-4 [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-[#F4F1F1] [&>li:not(:last-child)]:pb-4">
                  {parseBulletPoints(matchingData.blockFourBullets)}
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-(--breakpoint-md) px-4 py-24 sm:px-8">
            <h2 className="mx-auto mb-4 max-w-(--breakpoint-sm) text-4xl font-bold leading-none tracking-[-0.84px] sm:text-6xl md:text-[90px]">
              {parseWithHighlight(
                matchingData.block5Paragraph,
                "tech architecture."
              )}
            </h2>
            <p className="my-20 text-base leading-relaxed max-sm:mb-0 sm:text-[28px]">
              {parseText(matchingData.block5SubHeading).text}
            </p>
          </div>
        </section>

        <section className="bg-off-white max-sm:px-4 sm:py-24">
          <div className="container relative h-full w-full translate-y-[-10%] rounded-lg bg-white p-4 py-12 text-black shadow-lg sm:-translate-y-1/2 sm:p-8 sm:py-24">
            <div className="relative aspect-9/16 w-full overflow-hidden max-sm:mt-12 sm:max-h-[600px] sm:max-w-[887px] sm:translate-y-[-35%]">
              <Image
                src={matchingData.block5Image.url}
                alt="Block Five Image"
                className="h-full w-full object-cover object-top"
                quality={100}
                fill
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-8 sm:translate-y-full sm:flex-row sm:gap-x-12 sm:gap-y-0">
              {(() => {
                const bulletGroups = matchingData.block5Bullets.split("\n\n")
                const midpoint = Math.ceil(bulletGroups.length / 2)
                const group1 = bulletGroups.slice(0, midpoint)
                const group2 = bulletGroups.slice(midpoint)

                return [group1, group2].map((group, groupIndex) => (
                  <ul
                    key={groupIndex}
                    className="max-w-md space-y-6 bg-white p-8 text-dark-gray shadow-[0px_0px_26.5px_0px_rgba(0,0,0,0.05)] [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-[#F4F1F1] [&>li:not(:last-child)]:pb-6"
                  >
                    {group.map((bullet: { split: (arg0: string) => { (): any; new(): any; map: { (arg0: (part: any) => any): [any, any]; new(): any } } }, bulletIndex: React.Key | null | undefined) => {
                      const [heading, description] = bullet
                        .split("\n-")
                        .map((part) => part.trim())
                      return (
                        <li key={bulletIndex} className="flex items-start">
                          <svg
                            className="mr-4 mt-1 h-6 w-6 shrink-0 text-orange"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                          </svg>
                          <div className="flex flex-col text-base">
                            <span className="font-bold">
                              {heading.replace(/^-/, "")}
                            </span>
                            {description && (
                              <span className="mt-4 text-sm">
                                {description}
                              </span>
                            )}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                ))
              })()}
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="container px-4 sm:px-8">
            <div className="mb-24 flex justify-center gap-x-12">
              <div className="hidden w-full max-w-md sm:block" />
              <div className="w-full max-w-md">
                <h2 className="text-center text-4xl font-bold sm:text-right sm:text-6xl md:text-[90px]">
                  Meet the <br />
                  <span className="text-yellow">team.</span>
                </h2>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
              {teams.map((member, index) => (
                <div
                  key={index}
                  className={cn(
                    "mb-8 w-full px-4",
                    [2, 3, 6].includes(index + 1) ? "sm:w-[60%]" : "sm:w-[40%]"
                  )}
                >
                  <div className="h-full rounded-lg border border-solid border-[rgba(238,238,238,0.00)] bg-white p-6">
                    <h2 className="my-2 text-4xl font-bold sm:text-[58px]">{member.name}</h2>
                    <h3 className="mb-4 text-[19px] font-medium">{member.title}</h3>
                    <p className="mb-4 text-[19px] font-normal">{member.description}</p>
                    <a
                      href={member.linkedin}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


type HomepageV2BodyData = {
  headingOne: string
  headingTwo: string
  blockThreeParagraph: string
  blockThreeP2: string
  blockThreeBullets: string
  blockFourParagraph: string
  blockFourBullets: string
  block5Paragraph: string
  block5SubHeading: string
  block5Bullets: string
  blockThreeImage: { url: string }
  blockFourImage: { url: string }
  block5Image: { url: string }
  // Add other fields as needed
}

const teams = [
  {
    name: "Mike Sexton",
    title: "Chief Technology Officer",
    description:
      "@conversiondigital/ ensures flexibility by letting you choose the best model for your business needs, without being locked into a single provider",
    linkedin: "https://www.linkedin.com/in/mike-sexton",
  },
  {
    name: "Leigh Grey-Smith",
    title: "Chief Design Officer",
    description:
      "Actively train and shape your AI assistants through feedback loops, allowing them to respond based on your workflows and requirements. This custom training ensures that your AI continues to evolve and deliver value.",
    linkedin: "https://www.linkedin.com/in/leigh-grey-smith",
  },
  {
    name: "Leigh Grey-Smith",
    title: "Chief Design Officer",
    description:
      "Actively train and shape your AI assistants through feedback loops, allowing them to respond based on your workflows and requirements. This custom training ensures that your AI continues to evolve and deliver value.",
    linkedin: "https://www.linkedin.com/in/leigh-grey-smith",
  },
  {
    name: "Mike Sexton",
    title: "Chief Technology Officer",
    description:
      "@conversiondigital/ ensures flexibility by letting you choose the best model for your business needs, without being locked into a single provider",
    linkedin: "https://www.linkedin.com/in/mike-sexton",
  },
  {
    name: "Mike Sexton",
    title: "Chief Technology Officer",
    description:
      "@conversiondigital/ ensures flexibility by letting you choose the best model for your business needs, without being locked into a single provider",
    linkedin: "https://www.linkedin.com/in/mike-sexton",
  },
  {
    name: "Leigh Grey-Smith",
    title: "Chief Design Officer",
    description:
      "Actively train and shape your AI assistants through feedback loops, allowing them to respond based on your workflows and requirements. This custom training ensures that your AI continues to evolve and deliver value.",
    linkedin: "https://www.linkedin.com/in/leigh-grey-smith",
  },
]
