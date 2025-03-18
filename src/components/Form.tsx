import * as React from 'react';
import * as FormPrimitive from '@radix-ui/react-form';
import { cnm as cn } from "../utils/cnMerge";

const Form = FormPrimitive.Root;

const FormField = FormPrimitive.Field;

const FormLabel = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Label>
>(({ className, ...props }, ref) => (
  <FormPrimitive.Label
    ref={ref}
    className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
    {...props}
  />
));
FormLabel.displayName = FormPrimitive.Label.displayName;

const FormControl = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Control>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Control>
>(({ className, ...props }, ref) => (
  <FormPrimitive.Control
    ref={ref}
    className={cn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
      'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
));
FormControl.displayName = FormPrimitive.Control.displayName;

const FormMessage = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Message>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Message>
>(({ className, children, ...props }, ref) => (
  <FormPrimitive.Message
    ref={ref}
    className={cn('text-sm font-medium text-destructive', className)}
    {...props}
  >
    {children}
  </FormPrimitive.Message>
));
FormMessage.displayName = FormPrimitive.Message.displayName;

export { Form, FormField, FormLabel, FormControl, FormMessage };

