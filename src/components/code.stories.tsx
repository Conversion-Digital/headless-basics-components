import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ExampleCode, { ExampleCodeJSON } from "./code";

const meta = {
  title: "Components/Code",
  component: ExampleCode,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ExampleCode>;

export default meta;
type Story = StoryObj<typeof ExampleCode>;

export const Javascript: Story = {
  render: () => (
    <ExampleCode language="javascript">
{`function greeting(name) {
  return \`Hello, \${name}!\`;
}

const result = greeting("World");
console.log(result); // Hello, World!`}
    </ExampleCode>
  ),
};

export const JSX: Story = {
  render: () => (
    <ExampleCode language="jsx">
{`function Button({ children, onClick }) {
  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}`}
    </ExampleCode>
  ),
};

export const JSON: Story = {
  render: () => (
    <ExampleCodeJSON language="json">
{`{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Boston",
    "country": "USA"
  },
  "hobbies": ["reading", "gaming", "coding"]
}`}
    </ExampleCodeJSON>
  ),
};
