import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <Label htmlFor="email">Email address</Label>
  ),
};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="rounded-md border px-3 py-2"
      />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500">
        Email
      </Label>
      <input
        type="email"
        id="email"
        required
        placeholder="Enter your email"
        className="rounded-md border px-3 py-2"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className="opacity-50">Email</Label>
      <input
        type="email"
        id="email"
        disabled
        placeholder="Enter your email"
        className="rounded-md border px-3 py-2 opacity-50 cursor-not-allowed"
      />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Profile picture</Label>
      <input
        id="picture"
        type="file"
        className="rounded-md border px-3 py-2"
      />
      <p className="text-sm text-slate-500">
        Your profile picture will be used in your profile and emails.
      </p>
    </div>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-start gap-3">
      <Label>Notify me about...</Label>
      <div className="grid gap-2">
        <div className="flex items-center space-x-2">
          <input type="radio" id="all" name="notifications" className="radio" />
          <Label htmlFor="all">All new messages</Label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="mentions" name="notifications" className="radio" />
          <Label htmlFor="mentions">Direct messages and mentions</Label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="none" name="notifications" className="radio" />
          <Label htmlFor="none">Nothing</Label>
        </div>
      </div>
    </div>
  ),
};
