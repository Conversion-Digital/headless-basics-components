import React from "react";
import { StoryObj } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";
import { breadcrumbs } from "../../mockup-data/breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
};
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    data: breadcrumbs,
    seperatorIcon: <span>|</span>,
    itemClassName: "uppercase font-urbanist text-my-blue font-500 text-xs tracking-0.1em no-underline mb-2.5",
    slug: "/sitemap",
  },
};
