"use client"

import React, { ImgHTMLAttributes, memo, useEffect, useRef } from "react"

type InlineSVGProps = {
  src?: string;
  alt?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>

const updateChildAttributes = (element: SVGElement | null): void => {
  if (element && element instanceof SVGElement) {
    if (element.tagName === "mask") return
    const fill = element.getAttribute("fill")
    const stroke = element.getAttribute("stroke")
    if (fill && fill !== "none") {
      element.setAttribute("fill", "currentColor")
    }
    if (stroke && stroke !== "none") {
      element.setAttribute("stroke", "currentColor")
    }

    const childNodes = element.childNodes
    for (let i = 0; i < childNodes.length; i++) {
      const childNode = childNodes[i]
      if (childNode instanceof SVGElement) {
        updateChildAttributes(childNode)
      }
    }
  }
}

const InlineSVG = memo<InlineSVGProps>(
  ({ src, alt, className, ...svgProps }: InlineSVGProps) => {
    const divRef = useRef<HTMLDivElement>(null)
    const abortControllerRef = useRef<AbortController | null>(null)

    useEffect(() => {
      // Abort any previous fetch
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      // Create new abort controller for this fetch
      abortControllerRef.current = new AbortController()
      const { signal } = abortControllerRef.current

      const replaceImgWithSVG = async () => {
        try {
          if (!src) return
          
          const response = await fetch(src, { signal })
          if (!response.ok) {
            throw new Error(`Failed to fetch SVG: ${response.statusText}`)
          }
          const text = await response.text()
          const parser = new DOMParser()
          const xmlDoc = parser.parseFromString(text, "text/xml")
          const svg = xmlDoc.getElementsByTagName("svg")[0]
          
          if (!svg) {
            throw new Error("No SVG element found in the fetched content")
          }
          
          // Check if the fetch was aborted
          if (signal.aborted) return

          if (className) {
            svg.setAttribute("class", className)
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          svg.removeAttribute("xmlns:a")
          svg.setAttribute("alt", alt || "")
          // Check if the viewport is set, if the viewport is not set, the SVG won't scale.
          if (
            !svg.getAttribute("viewBox") &&
            svg.getAttribute("height") &&
            svg.getAttribute("width")
          ) {
            svg.setAttribute(
              "viewBox",
              "0 0 " +
                svg.getAttribute("height") +
                " " +
                svg.getAttribute("width")
            )
          }

          // Set additional SVG attributes based on props
          Object.entries(svgProps).forEach(([key, value]) => {
            svg.setAttribute(key, String(value))
          })

          // update fill and stroke to currentColor
          updateChildAttributes(svg)

          // Replace the <img> element with the new SVG
          const divElement = divRef.current
          if (divElement && divElement.firstChild) {
            divElement.replaceChild(svg, divElement.firstChild)
          }
        } catch (error) {
          if (error instanceof Error && error.name !== 'AbortError') {
            console.error(`Error fetching or parsing SVG: ${error}`)
          }
        }
      }

      replaceImgWithSVG()
      
      // Cleanup function to abort fetch on unmount or src change
      return () => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort()
        }
      }
    }, [src, className, svgProps])

    return (
      <div ref={divRef}>
        <img id={src} src={src} alt={alt} className={className} />
      </div>
    )
  }
)

InlineSVG.displayName = "InlineSVG"

export default InlineSVG
