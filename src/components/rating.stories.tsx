import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Rating from "./rating";

const meta = {
  title: "Components/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: () => (
    <Rating value={3}>
      <Rating.Item />
      <Rating.Item />
      <Rating.Item />
      <Rating.Item />
      <Rating.Item />
    </Rating>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Rating value={4} size="xs">
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
      </Rating>
      <Rating value={4} size="sm">
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
      </Rating>
      <Rating value={4} size="md">
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
      </Rating>
      <Rating value={4} size="lg">
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
      </Rating>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [rating, setRating] = React.useState(3);
    return (
      <Rating value={rating} onChange={setRating}>
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
      </Rating>
    );
  },
};

export const HalfStars: Story = {
  render: () => (
    <Rating value={3.5} half>
      <Rating.Item />
      <Rating.Item />
      <Rating.Item />
      <Rating.Item />
      <Rating.Item />
    </Rating>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div className="space-y-4">
      <Rating value={5}>
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
      </Rating>
      <Rating value={4}>
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
      </Rating>
      <Rating value={3}>
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
        <Rating.Item />
      </Rating>
    </div>
  ),
};

export const Hidden: Story = {
  render: () => (
    <Rating value={0} hidden>
      <Rating.Item />
      <Rating.Item />
      <Rating.Item />
      <Rating.Item />
      <Rating.Item />
    </Rating>
  ),
};
