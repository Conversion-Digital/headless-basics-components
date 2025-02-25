import React, { ReactNode } from "react";

export type TableHeadProps = React.TableHTMLAttributes<HTMLTableSectionElement> & {
  data?: ReactNode[];
};

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(({ data, ...props }, ref): JSX.Element => {
  return (
    <thead {...props} ref={ref}>
      <tr>
        {data?.map((child, i) => {
          return <th key={i}>{child}</th>;
        })}
      </tr>
    </thead>
  );
});

TableHead.displayName = "TableHead";

export default TableHead;
