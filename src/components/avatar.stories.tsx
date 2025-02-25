import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="broken-link.jpg"
        alt="John Doe"
      />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const CustomSize: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-6 w-6">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      
      <Avatar className="h-8 w-8">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      
      <Avatar className="h-12 w-12">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      
      <Avatar className="h-16 w-16">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="bg-blue-500">
        <AvatarFallback className="text-white">AB</AvatarFallback>
      </Avatar>
      
      <Avatar className="bg-green-500">
        <AvatarFallback className="text-white">CD</AvatarFallback>
      </Avatar>
      
      <Avatar className="bg-yellow-500">
        <AvatarFallback className="text-white">EF</AvatarFallback>
      </Avatar>
      
      <Avatar className="bg-red-500">
        <AvatarFallback className="text-white">GH</AvatarFallback>
      </Avatar>
    </div>
  ),
};
