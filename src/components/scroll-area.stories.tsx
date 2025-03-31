import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";

const meta = {
  title: "Components/Feedback/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.${a.length - i}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border border-slate-200 dark:border-slate-700">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border border-slate-200 dark:border-slate-700">
      <div className="flex p-4">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="w-[120px] flex-none rounded-md border border-slate-200 p-4 dark:border-slate-700"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Both: Story = {
  render: () => (
    <ScrollArea className="h-72 w-96 rounded-md border border-slate-200 dark:border-slate-700">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Changelog</h4>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="mb-4">
            <h5 className="mb-1 text-sm font-medium">v1.0.{50 - i}</h5>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quos voluptate quia quae
              accusantium quas quidem voluptas dolorum. Quisquam voluptatum.
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithMaxHeight: Story = {
  render: () => (
    <ScrollArea className="h-[calc(100vh-8rem)] w-96 rounded-md border border-slate-200 dark:border-slate-700">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Content</h4>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="mb-4">
            <h5 className="mb-1 text-sm font-medium">Section {i + 1}</h5>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quos voluptate quia quae.
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
