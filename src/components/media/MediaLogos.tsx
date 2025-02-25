import React from "react"
import Image from "next/image"
import { cn } from "@conversiondigital/cd-headless-data/src"

interface MediaLogosProps {
  className?: string
  clients: {
    name: string
    logoUrl: string
  }[]
}

export default function MediaLogos({ clients, className }: MediaLogosProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-wrap items-center justify-center p-8 md:justify-between",
        className
      )}
    >
      <div className="absolute top-0 left-0 h-[1px] w-full bg-linear-to-r from-gray-100 via-gray-300 to-gray-100"></div>
      {clients?.map((client, index) => (
        <Image
          key={index}
          alt={client.name}
          loading="lazy"
          src={client.logoUrl}
          width={100}
          height={28}
          className="m-4 w-[100px] object-cover md:m-0"
        />
      ))}
      <div className="absolute bottom-0 left-0 top-auto h-[1px] w-full bg-linear-to-r from-gray-100 via-gray-300 to-gray-100"></div>
    </div>
  )
}
