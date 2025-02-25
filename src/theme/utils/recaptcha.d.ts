/**
 * Global declarations for reCAPTCHA functionality.
 *
 * This file provides type declarations for the reCAPTCHA API, extending the Window interface to include properties and methods for rendering and interacting with reCAPTCHA instances.
*/

export {}

declare global {
  interface Window {
    isCaptchaLoaded: Record<string, boolean>
    grecaptcha: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string
          callback?: (token: string) => void
        }
      ) => number
      reset: (widgetId: number) => void
      execute: (widgetId: number) => Promise<string>
      getResponse: (widgetId: number) => string
    }
    [key: string]: any // For dynamic properties like clearError{id}
  }
}

declare module "next" {
  interface Window {
    isCaptchaLoaded: Record<string, boolean>
    grecaptcha: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string
          callback?: (token: string) => void
        }
      ) => number
      reset: (widgetId: number) => void
      execute: (widgetId: number) => Promise<string>
      getResponse: (widgetId: number) => string
    }
    [key: string]: any
  }
}
