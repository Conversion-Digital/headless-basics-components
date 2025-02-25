import React, { ReactNode } from "react"

export type TableFooterProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> & {
    data?: ReactNode[]
  }

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ data, ...props }, ref): JSX.Element => {
    return (
      <tfoot {...props} ref={ref}>
        <tr>
          {data?.map((child, i) => {
            return <th key={i}>{child}</th>
          })}
        </tr>
      </tfoot>
    )
  }
)

TableFooter.displayName = "TableFooter"

export default TableFooter
