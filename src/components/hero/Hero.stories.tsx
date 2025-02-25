import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Hero.Content className="text-center">
          <h1 className="text-5xl font-bold">Welcome to Our Platform</h1>
          <p className="py-6">Experience the next generation of digital solutions.</p>
          <button className="btn btn-primary">Get Started</button>
        </Hero.Content>
      </>
    ),
  },
};

export const WithOverlay: Story = {
  args: {
    children: (
      <>
        <Hero.Overlay className="bg-opacity-60" />
        <Hero.Content className="text-center text-neutral-content">
          <h1 className="text-5xl font-bold">Discover More</h1>
          <p className="py-6">Join thousands of satisfied users worldwide.</p>
          <button className="btn btn-primary">Learn More</button>
        </Hero.Content>
      </>
    ),
    style: {
      backgroundImage: "url(https://picsum.photos/1000/400)",
    },
  },
};

export const WithMinHeight: Story = {
  args: {
    children: (
      <>
        <Hero.Content className="text-center min-h-[500px]">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              This hero has a minimum height of 500px, making it perfect for showcasing important content with plenty of breathing room.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </Hero.Content>
      </>
    ),
  },
};

export const WithParallax: Story = {
  args: {
    children: (
      <>
        <div className="hero-overlay bg-opacity-60"></div>
        <Hero.Content className="text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Parallax Effect</h1>
            <p className="mb-5">
              This hero uses a parallax effect with a fixed background image, creating depth and visual interest as users scroll.
            </p>
            <button className="btn btn-primary">Explore</button>
          </div>
        </Hero.Content>
      </>
    ),
    style: {
      backgroundImage: "url(https://picsum.photos/1000/800)",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
};

export const GradientBackground: Story = {
  args: {
    children: (
      <>
        <Hero.Content className="text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Gradient Hero</h1>
            <p className="mb-5">
              A beautiful gradient background that transitions smoothly between colors.
            </p>
            <button className="btn btn-primary">Explore</button>
          </div>
        </Hero.Content>
      </>
    ),
    className: "min-h-[400px]",
    style: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
  },
};

export const PatternBackground: Story = {
  args: {
    children: (
      <>
        <Hero.Overlay className="bg-opacity-60 bg-base-100" />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Pattern Design</h1>
            <p className="mb-5">
              Using subtle patterns to add texture to your hero section.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </Hero.Content>
      </>
    ),
    className: "min-h-[400px]",
    style: {
      backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')",
      backgroundColor: "#ffffff",
    },
  },
};

export const VideoBackground: Story = {
  args: {
    children: (
      <>
        <Hero.Overlay className="bg-opacity-60" />
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
        </video>
        <Hero.Content className="text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Video Background</h1>
            <p className="mb-5">
              Engage your audience with dynamic video backgrounds.
            </p>
            <button className="btn btn-primary">Watch More</button>
          </div>
        </Hero.Content>
      </>
    ),
    className: "min-h-[500px]",
  },
};

export const AnimatedBackground: Story = {
  args: {
    children: (
      <>
        <Hero.Content className="text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Animated Background</h1>
            <p className="mb-5">
              Add life to your hero section with subtle animations.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </Hero.Content>
      </>
    ),
    className: "min-h-[400px] animate-gradient",
    style: {
      background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      backgroundSize: "400% 400%",
      animation: "gradient 15s ease infinite",
    },
  },
};
