import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta = {
  title: "Components/Data Display/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-slate-200 p-2 dark:border-slate-700 dark:bg-slate-800"
              placeholder="m@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full rounded-md border border-slate-200 p-2 dark:border-slate-700 dark:bg-slate-800"
              placeholder="Your name"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Change Password</h3>
          <div className="space-y-2">
            <label className="text-sm font-medium">Current Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-slate-200 p-2 dark:border-slate-700 dark:bg-slate-800"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">New Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-slate-200 p-2 dark:border-slate-700 dark:bg-slate-800"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="music" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="music" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          Music
        </TabsTrigger>
        <TabsTrigger value="podcast" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Podcast
        </TabsTrigger>
      </TabsList>
      <TabsContent value="music">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Music</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Listen to your favorite music tracks and albums.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="podcast">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Podcasts</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Discover and listen to amazing podcasts.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Active Tasks</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            View your active tasks and their progress.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="disabled">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Disabled Content</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            This content is currently disabled.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="pending">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Pending Tasks</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            View tasks that are waiting to be started.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
