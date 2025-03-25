"use client"

import React, { useState } from "react"
import { cnm as cn } from "../../../../../utils/cnMerge"

interface CarouselScrollerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function CarouselScroller({ 
  children, 
  speed = 30,
  className 
}: CarouselScrollerProps) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div 
      className={cn("w-full relative overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={cn(
          "inline-flex items-center gap-4",
          isPaused ? "animate-pause" : "animate-scroll"
        )}
        style={{
          "--scroll-speed": `${speed}s`,
          width: "max-content",
        } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  )
}