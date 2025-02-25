/* eslint-disable react/prop-types */
import React from "react"
import Stat from "./Stat"
import { cnm as cn } from "../../utils/cnMerge";

export type StatsProps = React.HTMLAttributes<HTMLDivElement> & {
  horizontal?: boolean
  vertical?: boolean
}

const Stats = React.forwardRef<HTMLDivElement, StatsProps>(
  (
    { horizontal, vertical, className, children, ...props },
    ref
  ): JSX.Element => {
    const classes = cn("stats", className, {
      "stats-horizontal": horizontal,
      "stats-vertical": vertical,
    })

    return (
      <div {...props} ref={ref} className={classes}>
        {children}
      </div>
    )
  }
)
Stats.displayName = "Stats"

export default Object.assign(Stats, { Stat })
