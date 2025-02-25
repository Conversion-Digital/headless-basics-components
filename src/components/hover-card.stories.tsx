import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const UserPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" className="text-blue-500 hover:underline">@username</a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@username</h4>
            <p className="text-sm">
              Frontend developer and UI/UX enthusiast. Building awesome web experiences.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-slate-500">
                Joined December 2023
              </span>
            </div>
          </div>
          <img
            className="h-16 w-16 rounded-full"
            src="https://avatars.githubusercontent.com/u/24512644"
            alt="@username"
          />
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ProductPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" className="text-blue-500 hover:underline">iPhone 15 Pro</a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">iPhone 15 Pro</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Pro camera system | A17 Pro chip | Titanium design
            </p>
            <div className="flex items-center pt-2">
              <span className="font-semibold text-sm">From $999</span>
              <span className="mx-2 text-slate-500">•</span>
              <span className="text-sm text-green-500">In Stock</span>
            </div>
          </div>
          <img
            className="h-16 w-16 rounded object-cover"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=2560&hei=1440&fmt=jpeg&qlt=95"
            alt="iPhone 15 Pro"
          />
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const CustomPosition: Story = {
  render: () => (
    <div className="flex items-center justify-center space-x-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="text-sm font-medium">Bottom</button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Tooltip Bottom</h4>
            <p className="text-sm">This card appears below the trigger.</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="text-sm font-medium">Right</button>
        </HoverCardTrigger>
        <HoverCardContent align="start" sideOffset={10}>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Tooltip Right</h4>
            <p className="text-sm">This card appears to the right of the trigger.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};
