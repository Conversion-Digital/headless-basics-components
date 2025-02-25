// Define types for the data
export interface ValueContent {
  isHeading: boolean
  columnSpan: number
  value: string
}

export interface Content {
  parent: any
  name: any
  navigationTitle: any
  labal: any
  values: {
    content: ValueContent
  }[]
}

export interface TableRow {
  content: Content
}

export interface Rows {
  rows: TableRow[]
}

export interface AdvancedSpecificationTableProps {
  data: Rows
}
