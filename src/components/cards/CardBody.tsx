/* eslint-disable react/prop-types */

import React from "react"
import { cnm as cn } from "../../utils/cnMerge";

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-body", className)} {...props} />
  )
)

CardBody.displayName = "CardBody"

export default CardBody
