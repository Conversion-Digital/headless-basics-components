import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormField, FormLabel, FormControl, FormMessage } from '../components/Form';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './alert-dialog';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const SignUpForm = () => {
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  return (
    <>
      <Form className="space-y-6 w-[400px]" onSubmit={handleSubmit}>
        <FormField name="firstName" serverInvalid={false}>
          <div className="space-y-2">
            <FormLabel>First name</FormLabel>
            <FormControl asChild>
              <input
                type="text"
                placeholder="Enter your first name"
                required
              />
            </FormControl>
            <FormMessage match="valueMissing">
              Please enter your first name
            </FormMessage>
          </div>
        </FormField>

        <FormField name="lastName" serverInvalid={false}>
          <div className="space-y-2">
            <FormLabel>Last name</FormLabel>
            <FormControl asChild>
              <input
                type="text"
                placeholder="Enter your last name"
                required
              />
            </FormControl>
            <FormMessage match="valueMissing">
              Please enter your last name
            </FormMessage>
          </div>
        </FormField>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground h-10 px-4 py-2 rounded-md 
                   hover:bg-primary/90 transition-colors"
        >
          Sign up
        </button>
      </Form>

      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Success!</AlertDialogTitle>
            <AlertDialogDescription>
              You have successfully signed up.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export const SignUp: Story = {
  render: () => <SignUpForm />,
};

export const SignUpWithError: Story = {
  render: () => (
    <Form className="space-y-6 w-[400px]">
      <FormField name="firstName" serverInvalid={true}>
        <div className="space-y-2">
          <FormLabel>First name</FormLabel>
          <FormControl asChild>
            <input
              type="text"
              placeholder="Enter your first name"
              required
            />
          </FormControl>
          <FormMessage className="text-red-500">First name is required</FormMessage>
        </div>
      </FormField>

      <FormField name="lastName" serverInvalid={true}>
        <div className="space-y-2">
          <FormLabel>Last name</FormLabel>
          <FormControl asChild>
            <input
              type="text"
              placeholder="Enter your last name"
              required
            />
          </FormControl>
          <FormMessage className="text-red-500">Last name is required</FormMessage>
        </div>
      </FormField>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground h-10 px-4 py-2 rounded-md 
                 hover:bg-primary/90 transition-colors"
      >
        Sign up
      </button>
    </Form>
  ),
};

