import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PhoneInput from "./PhoneInput";
import "react-phone-input-2/lib/style.css";

const meta = {
  title: "Components/Data Entry/PhoneInput",
  component: PhoneInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof PhoneInput>;

const baseInputClass = "flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900";
const baseButtonClass = "rounded-l-md border border-slate-300 bg-transparent dark:border-slate-700";
const baseDropdownClass = "rounded-md border border-slate-300 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50";

export const Default: Story = {
  args: {
    country: "au",
    value: "",
    placeholder: "Enter phone number",
    inputClass: baseInputClass,
    buttonClass: baseButtonClass,
    dropdownClass: baseDropdownClass,
  },
};

export const WithValue: Story = {
  args: {
    country: "au",
    value: "",
    placeholder: "Enter phone number",
    inputClass: baseInputClass,
    buttonClass: baseButtonClass,
    dropdownClass: baseDropdownClass,
  },
};

export const Disabled: Story = {
  args: {
    country: "au",
    value: "",
    disabled: true,
    placeholder: "Enter phone number",
    inputClass: baseInputClass,
    buttonClass: baseButtonClass,
    dropdownClass: baseDropdownClass,
  },
};

export const WithError: Story = {
  render: () => (
    <div className="space-y-1">
      <PhoneInput
        country="au"
        value="invalid"
        placeholder="Enter phone number"
        inputClass={baseInputClass.replace("border-slate-300", "border-red-500").replace("focus:ring-slate-400", "focus:ring-red-500")}
        buttonClass={baseButtonClass.replace("border-slate-300", "border-red-500")}
        dropdownClass={baseDropdownClass}
        isValid={false}
      />
      <p className="text-sm text-red-500 dark:text-red-400">Please enter a valid phone number</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-1">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Phone Number
      </label>
      <PhoneInput
        country="au"
        value=""
        placeholder="Enter phone number"
        inputClass={baseInputClass}
        buttonClass={baseButtonClass}
        dropdownClass={baseDropdownClass}
      />
      <p className="text-sm text-slate-500 dark:text-slate-400">
        We&apos;ll use this number to send you updates
      </p>
    </div>
  ),
};
