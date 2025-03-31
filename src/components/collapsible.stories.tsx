import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

const meta = {
  title: "Components/Data Display/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-slate-700 px-4 py-2 font-medium text-white hover:bg-slate-600">
        <span>What is your refund policy?</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200">
        If you&apos;re unhappy with your purchase for any reason, email us within 90 days and we&apos;ll refund you in full, no questions asked.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const WithMultipleItems: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <Collapsible className="space-y-2">
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-slate-700 px-4 py-2 font-medium text-white hover:bg-slate-600">
          <span>How do I get started?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-200"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </CollapsibleTrigger>
        <CollapsibleContent className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200">
          Follow our quick start guide to install and set up the library in your project. You&apos;ll be up and running in minutes!
        </CollapsibleContent>
      </Collapsible>

      <Collapsible className="space-y-2">
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-slate-700 px-4 py-2 font-medium text-white hover:bg-slate-600">
          <span>Is there a free trial?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-200"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </CollapsibleTrigger>
        <CollapsibleContent className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200">
          Yes! You can try our service free for 14 days. No credit card required.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible className="space-y-2">
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-slate-700 px-4 py-2 font-medium text-white hover:bg-slate-600">
          <span>What payment methods do you accept?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-200"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </CollapsibleTrigger>
        <CollapsibleContent className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200">
          We accept all major credit cards, PayPal, and bank transfers.
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};
