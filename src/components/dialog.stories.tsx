import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta = {
  title: "Components/Feedback/Modal/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="btn btn-primary">Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn btn-error">Delete Account</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const SignUpForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="btn btn-primary">Sign Up</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>
            Enter your information below to create your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="input input-bordered w-full"
              placeholder="Create a password"
            />
          </div>
        </div>
        <DialogFooter>
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn btn-primary">Create Account</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ShareDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="btn">Share</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share this document</DialogTitle>
          <DialogDescription>
            Anyone with the link can view this document.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 py-4">
          <input
            className="input input-bordered flex-1"
            value="https://example.com/document/abc123"
            readOnly
          />
          <button className="btn btn-primary">Copy</button>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">
              <svg
                className="h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium">Anyone with the link</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Can view this document
              </p>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <button className="btn btn-ghost">Close</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
