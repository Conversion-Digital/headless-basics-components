/* eslint-disable react/prop-types */
import React, { ReactNode } from "react";
import { cnm as cn } from "../../utils/cnMerge";

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement> & {
  data?: ReactNode[];
  active?: boolean;
  hover?: boolean;
};

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(({ data, active, hover, className, ...props }, ref): JSX.Element => {
  const classes = cn(className, {
    active: active,
    hover: hover,
  });

  return (
    <tr {...props} className={classes} ref={ref}>
      {data?.map((child, i) => (i < 1 ? <th key={i}>{child}</th> : <td key={i}>{child}</td>))}
    </tr>
  );
});

TableRow.displayName = "TableRow";

export default TableRow;
