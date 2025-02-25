"use client"

import { MinusIcon, PlusIcon } from "lucide-react"
import { getLogger } from "@conversiondigital/headless-basics-data/src"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../../components/accordion"

const log = getLogger("theme.components.accordion.components.accordionClient")

interface AccordionData {
  name: string;
  renderedComponent: React.ReactNode;
}

interface AccordionClientProps {
  accordionData: AccordionData[];
  globalData: any; // Replace 'any' with the appropriate type if known
}

export default function AccordionClient({ accordionData, globalData }: AccordionClientProps) {
  return (
    <>
      <Accordion className="AccordionRoot mt-8" type="single" collapsible>
        {accordionData?.map(({ name, renderedComponent }, index) => {
          return (
            <AccordionItem
              className="AccordionItem border-t border-my-blue pr-1"
              value={`feature-${index}`}
              key={`feature-${name}-${index}`}
            >
              <AccordionTrigger
                className="text-h5 font-800 uppercase leading-h5 tracking-0.1em hover:no-underline"
                collapsedIcon={<PlusIcon className="text-my-yellow" />}
                expandedIcon={<MinusIcon className="text-my-yellow" />}
                hasChild={true}
              >
                {name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 gap-4">
                  {renderedComponent}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}
