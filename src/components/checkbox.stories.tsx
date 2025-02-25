import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <div className="flex items-center space-x-2">
        <Checkbox id="default" />
        <label htmlFor="default">Default</label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="checked" defaultChecked />
        <label htmlFor="checked">Checked</label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <label htmlFor="disabled">Disabled</label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <label htmlFor="disabled-checked">Disabled Checked</label>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Newsletter Preferences</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <label htmlFor="marketing">Receive marketing emails</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="updates" defaultChecked />
            <label htmlFor="updates">Receive product updates</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="security" defaultChecked />
            <label htmlFor="security">Receive security alerts</label>
          </div>
        </div>
      </div>
      <button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-700">
        Save Preferences
      </button>
    </form>
  ),
};
