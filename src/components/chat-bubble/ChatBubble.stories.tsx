import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChatBubble from "./ChatBubble";

const meta = {
  title: "Components/Feedback/ChatBubble",
  component: ChatBubble,
  parameters: {
    layout: "centered",
  }
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Start: Story = {
  args: {
    children: (
      <>
        <ChatBubble.Avatar src="https://picsum.photos/200" fallback="JD" />
        <ChatBubble.Header>John Doe</ChatBubble.Header>
        <ChatBubble.Message>Hey, how are you?</ChatBubble.Message>
        <ChatBubble.Footer>Delivered</ChatBubble.Footer>
        <ChatBubble.Time>12:45 PM</ChatBubble.Time>
      </>
    ),
  },
};

export const End: Story = {
  args: {
    end: true,
    children: (
      <>
        <ChatBubble.Avatar src="https://picsum.photos/201" fallback="ME" />
        <ChatBubble.Header>Me</ChatBubble.Header>
        <ChatBubble.Message>I&apos;m doing great, thanks for asking!</ChatBubble.Message>
        <ChatBubble.Footer>Seen</ChatBubble.Footer>
        <ChatBubble.Time>12:46 PM</ChatBubble.Time>
      </>
    ),
  },
};

export const WithoutAvatar: Story = {
  args: {
    children: (
      <>
        <ChatBubble.Header>Anonymous</ChatBubble.Header>
        <ChatBubble.Message>This is a message without an avatar</ChatBubble.Message>
        <ChatBubble.Time>12:47 PM</ChatBubble.Time>
      </>
    ),
  },
};

export const LongMessage: Story = {
  args: {
    end: true,
    children: (
      <>
        <ChatBubble.Avatar src="https://picsum.photos/202" fallback="ME" />
        <ChatBubble.Header>Me</ChatBubble.Header>
        <ChatBubble.Message>
          This is a much longer message that demonstrates how the chat bubble handles multiple lines of text. 
          It should wrap nicely and maintain readability while keeping the bubble&apos;s shape intact.
        </ChatBubble.Message>
        <ChatBubble.Footer>Sent</ChatBubble.Footer>
        <ChatBubble.Time>12:48 PM</ChatBubble.Time>
      </>
    ),
  },
};
