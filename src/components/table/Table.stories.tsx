import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import { TableData } from "../../mockup-data/table";

const meta = {
  title: "Components/Data Display/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Head data={TableData.headers as ReactNode[]} />
      <Table.Body>
        {TableData.rows.map((row) => (
          <Table.Row key={row.id} data={row.cells as ReactNode[]} />
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Zebra: Story = {
  render: () => (
    <Table zebra>
      <Table.Head data={TableData.headers as ReactNode[]} />
      <Table.Body>
        {TableData.rows.map((row) => (
          <Table.Row key={row.id} data={row.cells as ReactNode[]} />
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Compact: Story = {
  render: () => (
    <Table compact>
      <Table.Head data={TableData.headers as ReactNode[]} />
      <Table.Body>
        {TableData.rows.map((row) => (
          <Table.Row key={row.id} data={row.cells as ReactNode[]} />
        ))}
      </Table.Body>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <Table.Head data={TableData.headers as ReactNode[]} />
      <Table.Body>
        {TableData.rows.map((row) => (
          <Table.Row key={row.id} data={row.cells as ReactNode[]} />
        ))}
      </Table.Body>
      <Table.Footer data={TableData.headers as ReactNode[]} />
    </Table>
  ),
};
