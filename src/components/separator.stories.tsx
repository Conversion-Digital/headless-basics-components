import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta = {
  title: "Components/Data Display/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4">
      <div>Left</div>
      <Separator orientation="vertical" />
      <div>Right</div>
    </div>
  ),
};

export const WithCustomWidth: Story = {
  render: () => (
    <div className="space-y-4">
      <Separator className="w-[200px]" />
      <Separator className="w-[300px]" />
      <Separator className="w-[400px]" />
    </div>
  ),
};

export const WithCustomColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Separator className="bg-primary w-[200px]" />
      <Separator className="bg-secondary w-[200px]" />
      <Separator className="bg-red-500 w-[200px]" />
      <Separator className="bg-green-500 w-[200px]" />
      <Separator className="bg-blue-500 w-[200px]" />
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-slate-500 dark:text-slate-400">
        Released a month ago
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
      <Separator className="my-4" />
      <div className="text-sm text-slate-500 dark:text-slate-400">
        2.1K views
      </div>
    </div>
  ),
};
