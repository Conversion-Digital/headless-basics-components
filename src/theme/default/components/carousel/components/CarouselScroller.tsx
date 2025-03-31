"use client";

import React, { useState, useEffect, useRef } from "react";
import { cnm as cn } from "../../../../../utils/cnMerge";

interface CarouselScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  speed?: number;
  pauseOnHover?: boolean;
}

export function CarouselScroller({
  children,
  speed = 30,
  pauseOnHover = true,
  className,
  ...props
}: CarouselScrollerProps) {
  const [duplicateCount, setDuplicateCount] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDuplicateCount = () => {
      if (containerRef.current && itemRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = itemRef.current.offsetWidth;
        if (itemWidth > 0) {
          const itemsInView = Math.ceil(containerWidth / itemWidth);
          setDuplicateCount(itemsInView * 2); 
        }
      }
    };

    updateDuplicateCount();

    const resizeObserver = new ResizeObserver(() => {
      updateDuplicateCount();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full relative overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn("inline-flex items-center gap-0")}
        style={{
          animation: `scroll ${speed}s linear infinite`,
          animationPlayState: pauseOnHover ? "running" : undefined,
          width: "max-content",
        } as React.CSSProperties}
        onMouseEnter={() => {
          if (pauseOnHover) {
            containerRef.current?.querySelector("div")?.style.setProperty(
              "animation-play-state",
              "paused"
            );
          }
        }}
        onMouseLeave={() => {
          if (pauseOnHover) {
            containerRef.current?.querySelector("div")?.style.setProperty(
              "animation-play-state",
              "running"
            );
          }
        }}
      >
        {Array.from({ length: duplicateCount }, (_, i) =>
          children.map((item, index) => (
            <div
              key={`${i}-${index}`}
              ref={i === 0 && index === 0 ? itemRef : undefined}
              className="flex-shrink-0 min-w-[200px]"
            >
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}