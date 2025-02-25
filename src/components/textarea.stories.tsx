import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea placeholder="Type your message here." />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label
        htmlFor="message"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Your Message
      </label>
      <Textarea
        id="message"
        placeholder="Type your message here."
      />
      <p className="text-sm text-slate-500">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label
        htmlFor="disabled"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Disabled
      </label>
      <Textarea
        id="disabled"
        placeholder="You cannot type here..."
        disabled
      />
    </div>
  ),
};

export const WithValue: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label
        htmlFor="bio"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Bio
      </label>
      <Textarea
        id="bio"
        defaultValue="I'm a software developer based in..."
      />
    </div>
  ),
};

export const WithCustomHeight: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label
        htmlFor="description"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Project Description
      </label>
      <Textarea
        id="description"
        className="h-40"
        placeholder="Describe your project in detail..."
      />
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label
        htmlFor="feedback"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Your Feedback
      </label>
      <Textarea
        id="feedback"
        placeholder="Please provide your feedback..."
        required
        minLength={10}
        maxLength={200}
      />
      <p className="text-sm text-slate-500">
        Feedback must be between 10 and 200 characters.
      </p>
    </div>
  ),
};
