import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Image src="https://picsum.photos/400/200" alt="Card Image" width={400} height={200} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <p>This is a simple card with an image and some text content.</p>
          <Card.Actions>
            <button className="btn btn-primary">Action</button>
          </Card.Actions>
        </Card.Body>
      </>
    ),
  },
};

export const Compact: Story = {
  args: {
    compact: true,
    children: (
      <>
        <Card.Image src="https://picsum.photos/400/200" alt="Card Image" width={400} height={200} />
        <Card.Body>
          <Card.Title>Compact Card</Card.Title>
          <p>A compact card with less padding.</p>
          <Card.Actions>
            <button className="btn btn-sm btn-primary">Action</button>
          </Card.Actions>
        </Card.Body>
      </>
    ),
  },
};

export const Side: Story = {
  args: {
    side: true,
    children: (
      <>
        <Card.Image src="https://picsum.photos/200/200" alt="Card Image" width={200} height={200} />
        <Card.Body>
          <Card.Title>Side Image Card</Card.Title>
          <p>A card with the image on the side instead of the top.</p>
          <Card.Actions>
            <button className="btn btn-primary">Action</button>
          </Card.Actions>
        </Card.Body>
      </>
    ),
  },
};

export const ImageFull: Story = {
  args: {
    imageFull: true,
    children: (
      <>
        <Card.Image src="https://picsum.photos/400/200" alt="Card Image" width={400} height={200} />
        <Card.Body>
          <Card.Title>Full Image Card</Card.Title>
          <p>A card with a full overlay image.</p>
          <Card.Actions>
            <button className="btn btn-primary">Action</button>
          </Card.Actions>
        </Card.Body>
      </>
    ),
  },
};

export const NoBorder: Story = {
  args: {
    bordered: false,
    children: (
      <Card.Body>
        <Card.Title>No Border Card</Card.Title>
        <p>A simple card without borders.</p>
        <Card.Actions>
          <button className="btn btn-primary">Action</button>
        </Card.Actions>
      </Card.Body>
    ),
  },
};

export const ResponsiveCompact: Story = {
  args: {
    compact: "md",
    children: (
      <>
        <Card.Image src="https://picsum.photos/400/200" alt="Card Image" width={400} height={200} />
        <Card.Body>
          <Card.Title>Responsive Compact Card</Card.Title>
          <p>This card becomes compact on medium screens and above.</p>
          <Card.Actions>
            <button className="btn btn-primary">Action</button>
          </Card.Actions>
        </Card.Body>
      </>
    ),
  },
};
