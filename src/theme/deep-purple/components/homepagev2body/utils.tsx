import React from "react"
import parse from "html-react-parser"
import { cn } from "@conversiondigital/headless-basics-data"

const parseHeadingWithHighlights = (html: string) => {
  return parse(html, {
    replace: (domNode) => {
      if (domNode.type === "tag" && domNode.name === "p") {
        return (
          <>
            {domNode.children.map((child, index) => {
              if (child.type === "text") {
                const words = child.data.split(/(\s+)/)
                return words.map((word, wordIndex) => {
                  if (word === "changing") {
                    return (
                      <span key={wordIndex} className="text-white">
                        {word}
                      </span>
                    )
                  } else if (word.endsWith(".")) {
                    return (
                      <React.Fragment key={wordIndex}>
                        {word.slice(0, -1)}
                        <span className="text-white">.</span>
                      </React.Fragment>
                    )
                  } else {
                    return (
                      <React.Fragment key={wordIndex}>{word}</React.Fragment>
                    )
                  }
                })
              }
              return child
            })}
          </>
        )
      }
    },
  })
}

const parseWithHighlight = (
  html: string,
  highlightText: string,
  highlightType: "text" | "bg" = "text"
) => {
  return parse(html, {
    replace: (domNode) => {
      if (domNode.type === "tag" && domNode.name === "p") {
        return (
          <>
            {domNode.children.map((child, index) => {
              if (child.type === "text" && child.data.includes(highlightText)) {
                const parts = child.data.split(highlightText)
                return (
                  <React.Fragment key={index}>
                    {parts[0]}
                    <span
                      className={cn(
                        "inline",
                        highlightType === "bg"
                          ? "inline-block -skew-y-1 bg-orange text-white"
                          : "text-orange"
                      )}
                    >
                      {highlightText}
                    </span>
                    {parts[1]}
                  </React.Fragment>
                )
              }
              return child
            })}
          </>
        )
      }
    },
  })
}

const parseBulletPoints = (bulletString: string) => {
  return bulletString.split("\n").map((bullet, index) => (
    <li key={index} className="flex items-center">
      <svg
        className="mr-4 h-6 w-6 shrink-0 text-orange"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
      </svg>
      <span className="text-sm">{bullet.replace(/^-\s*/, "")}</span>
    </li>
  ))
}

export { parseHeadingWithHighlights, parseWithHighlight, parseBulletPoints }
