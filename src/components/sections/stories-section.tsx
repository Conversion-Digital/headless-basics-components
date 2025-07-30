import React from "react";
import Image from "next/image"
import StoriesCard, { StoriesCardProps } from "./StoriesCard";

export interface StoriesSectionProps {
  title: string
  description: string
  cards: StoriesCardProps[]
}

export default function StoriesSection(props: StoriesSectionProps) {
  return (
    <div className="flex w-full flex-row items-center justify-center bg-[#d5fafcff] py-12 px-8">
      <div className="flex max-w-(--breakpoint-lg) flex-col flex-wrap items-center justify-center md:flex-row">
        <div className="relative flex shrink-0 grow-0 basis-auto flex-col items-center md:items-start">
          <div className="m-4 w-[100px] h-[13px] md:m-0" />
          <h1 className="z-50 max-w-lg text-center font-['Inter'] text-4xl font-extrabold leading-normal! md:text-left md:text-5xl">
            {props.title}
          </h1>
          <span>{props.description}</span>
          <div className="home-container10 mt-8 flex w-[350px] flex-col items-center justify-center self-end">
            {props?.cards?.length > 0 ? (
              <StoriesCard {...props.cards[0]} />
            ) : null}
          </div>
        </div>
        <div className="ml-0 flex shrink-0 grow-0 basis-auto flex-col items-center lg:ml-8 lg:items-start">
          <div className="flex w-[350px] flex-col items-start">
            {props?.cards?.length > 1 ? (
              <StoriesCard {...props.cards[1]} />
            ) : null}
          </div>
          <div className="mt-8 flex w-[350px] flex-col items-start lg:w-[300px]">
            {props?.cards?.length > 2 ? (
              <StoriesCard {...props.cards[2]} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}