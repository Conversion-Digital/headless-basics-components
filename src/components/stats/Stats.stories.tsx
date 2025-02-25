import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Stats from "./Stats";

const meta = {
  title: "Components/Stats",
  component: Stats,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof Stats>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Stats.Stat>
          <Stats.Stat.Item variant="title">Total Users</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">31K</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">Jan 1st - Feb 1st</Stats.Stat.Item>
        </Stats.Stat>
        <Stats.Stat>
          <Stats.Stat.Item variant="title">New Users</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">4,200</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">↗︎ 400 (22%)</Stats.Stat.Item>
        </Stats.Stat>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    horizontal: true,
    children: (
      <>
        <Stats.Stat>
          <Stats.Stat.Item variant="title">Downloads</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">31K</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">Jan 1st - Feb 1st</Stats.Stat.Item>
        </Stats.Stat>
        <Stats.Stat>
          <Stats.Stat.Item variant="title">New Users</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">4,200</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">↗︎ 400 (22%)</Stats.Stat.Item>
        </Stats.Stat>
        <Stats.Stat>
          <Stats.Stat.Item variant="title">New Registers</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">1,200</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">↘︎ 90 (14%)</Stats.Stat.Item>
        </Stats.Stat>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    vertical: true,
    children: (
      <>
        <Stats.Stat>
          <Stats.Stat.Item variant="title"> Downloads</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">31K</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">Jan 1st - Feb 1st</Stats.Stat.Item>
        </Stats.Stat>
        <Stats.Stat>
          <Stats.Stat.Item variant="title">New Users</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">4,200</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">↗︎ 400 (22%)</Stats.Stat.Item>
        </Stats.Stat>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <Stats.Stat>
          <Stats.Stat.Item variant="figure" className="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </Stats.Stat.Item>
          <Stats.Stat.Item variant="title">Total Users</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">31K</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">Jan 1st - Feb 1st</Stats.Stat.Item>
        </Stats.Stat>
        <Stats.Stat>
          <Stats.Stat.Item variant="figure" className="text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </Stats.Stat.Item>
          <Stats.Stat.Item variant="title">Revenue</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">$4,200</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">↗︎ $340 (18%)</Stats.Stat.Item>
        </Stats.Stat>
      </>
    ),
  },
};
