import type { Meta, StoryObj } from "@storybook/react";
import { GlobalTailwindNavigationMenu } from "./global-navigation";

const meta = {
  title: "Components/Navigation/GlobalNavigation",
  component: GlobalTailwindNavigationMenu,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof GlobalTailwindNavigationMenu>;

export default meta;
type Story = StoryObj<typeof GlobalTailwindNavigationMenu>;

const defaultNavItems = [
  {
    id: "1",
    name: "Home",
    url: "/",
    showInNavigation: true
  },
  {
    id: "2",
    name: "About",
    url: "/about",
    showInNavigation: true
  },
  {
    id: "3",
    name: "Services",
    url: "/services", 
    showInNavigation: true
  },
  {
    id: "4",
    name: "Contact",
    url: "/contact",
    showInNavigation: true
  }
];

export const Default: Story = {
  args: {
    navItems: defaultNavItems,
    navClasses: "flex items-center justify-between flex-wrap bg-teal-500 p-6"
  }
};

export const DarkTheme: Story = {
  args: {
    navItems: defaultNavItems,
    navClasses: "flex items-center justify-between flex-wrap bg-slate-800 p-6"
  }
};

export const WithHiddenItems: Story = {
  args: {
    navItems: [
      ...defaultNavItems,
      {
        id: "5",
        name: "Hidden Page",
        url: "/hidden",
        showInNavigation: false
      }
    ],
    navClasses: "flex items-center justify-between flex-wrap bg-teal-500 p-6"
  }
};

export const CustomStyling: Story = {
  args: {
    navItems: defaultNavItems,
    navClasses: "flex items-center justify-between flex-wrap bg-linear-to-r from-purple-500 to-pink-500 p-6 shadow-lg"
  }
};
