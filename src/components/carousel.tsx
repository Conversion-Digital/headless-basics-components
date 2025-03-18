"use client"

import React, { useEffect, useState } from 'react'
import { cnm as cn } from "../utils/cnMerge";

interface LogoCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    items: React.ReactNode[]
    speed?: number
    pauseOnHover?: boolean
    }

export const LogoCarousel = React.forwardRef<HTMLDivElement, LogoCarouselProps>(
    ({ items, speed = 30, pauseOnHover = true, className, ...props }, ref) => {
      const [isPaused, setIsPaused] = useState(false)
  
      return (
        <div 
          ref={ref}
          className={cn("w-full relative overflow-hidden", className)}
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
          {...props}
        >
          <div 
            className={cn(
              "inline-flex items-center gap-0 animate-scroll",
              isPaused ? "animate-pause" : "animate-scroll"
            )}
            style={{
              "--scroll-speed": `${speed}s`,
              width: 'max-content'
            } as React.CSSProperties}
          >
            {[...items, ...items, ...items, ...items].map((item, index) => (
              <div
                key={index} 
                className="flex-shrink-0 min-w-[200px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    }
  )

LogoCarousel.displayName = "LogoCarousel"