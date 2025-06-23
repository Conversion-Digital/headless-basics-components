import { Fragment } from "react"
import { alignmentClasses } from "@conversiondigital/headless-basics-data/src"

interface CustomTextProps {
  text: string;
  align?: string;
}

export const CustomText = ({ text, align }: CustomTextProps) => {
  const { textAlignClass } = alignmentClasses({ align: align || "center" })
  const words = text?.split(".")?.map((word, index, arr) => {
    const isLastWord = index === arr.length - 1
    return isLastWord ? (
      <Fragment key={index}>{word}</Fragment>
    ) : (
      <Fragment key={index}>
        {word}
        <span className="mr-4 text-my-yellow last:mr-0 lg:mr-20">.</span>
      </Fragment>
    )
  })

  return (
    <div className=" w-full break-after-auto bg-blue-500 py-8 font-urbanist uppercase">
      <h2
        className={`w-full py-2 font-urbanist text-h4 font-800 leading-h4 text-white sm:container lg:py-12 lg:text-h2 lg:leading-h2 ${textAlignClass}`}
      >
        {words}
      </h2>
    </div>
  )
}
