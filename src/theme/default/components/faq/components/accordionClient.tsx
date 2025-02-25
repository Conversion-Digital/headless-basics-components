"use client"

import { MinusIcon, PlusIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../../components//accordion"
import { Faqs } from "../../../../interfaces/fag.interface";
import { filterAndUpdateClass, LanguageSite } from "@conversiondigital/headless-basics-data/src";

export interface AccordionFaqClientProps {
  faqList: Faqs;
  languageSite: LanguageSite | undefined;
}

export default function AccordionFaqClient({ faqList, languageSite }: AccordionFaqClientProps) {

  if(!languageSite){
    return (<></>)
  }

  return (
    <>
      <Accordion
        className="AccordionRoot border-t border-my-blue"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {faqList?.map(({ content: item }, index) => {
          return (
            <AccordionItem
              className="AccordionItem border-b border-my-blue pr-1"
              key={index}
              value={`feature-${index}`}
            >
              <AccordionTrigger
                className="text-base tracking-0.1em uppercase hover:no-underline pt-5 pb-5 font-[800]"
                collapsedIcon={<PlusIcon className="text-my-yellow shrink-0" />}
                expandedIcon={<MinusIcon className="text-my-yellow shrink-0" />}
                hasChild={true}
              >
                {item.heading}
              </AccordionTrigger>
              <AccordionContent>
                <div
                  dangerouslySetInnerHTML={{
                    __html: filterAndUpdateClass(item.text, languageSite),
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}
