import { StoryObj } from "@storybook/react";
import Sitemap from "./Sitemap";
import { sitemaps } from "../../mockup-data/sitemap";
import { languageSite } from "../../mockup-data/languageSite";
import { ISitemapItem } from "../../interfaces/sitemap";

export default {
  title: "Components/Layout/Sitemap",
  component: Sitemap,
};
type Story = StoryObj<typeof Sitemap>;

export const Default: Story = {
  args: {
    sitemapList: sitemaps as ISitemapItem[],
    languageSite: languageSite,
  },
};
