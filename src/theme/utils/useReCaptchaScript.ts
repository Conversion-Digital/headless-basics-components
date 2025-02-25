"use client"

import { useCallback, useEffect, useState, useRef } from "react"

interface ReCaptchaState {
  isLoaded: boolean
  instances: Record<string, boolean>
}

/**
 * useReCaptchaScript loads the reCAPTCHA script and initializes it for the
 * given id. It returns a state object with the following properties:
 *
 * - `isLoaded`: a boolean indicating whether the reCAPTCHA script has been
 *   loaded
 * - `instances`: an object with the ids of the initialized reCAPTCHA instances
 *   as keys and a boolean indicating whether the instance is initialized as
 *   values
 *
 * The hook will attempt to initialize the reCAPTCHA instance up to 5 times if
 * it fails initially. It will also update the timestamp in the form data
 * every 500ms if the reCAPTCHA instance is initialized.
 *
 * @param id the id of the reCAPTCHA instance to initialize
 * @returns a state object with the properties mentioned above
 */
export const useReCaptchaScript = (id: string) => {
  const [state, setState] = useState<ReCaptchaState>({
    isLoaded: false,
    instances: {},
  })

  const loadAndInitialize = useCallback(() => {
    if (typeof window === "undefined") return false

    const showcaseCaptcha = document.getElementById(`showcaseRecaptcha-${id}`)
    if (!showcaseCaptcha) return false

    try {
      if (
        window.grecaptcha?.render &&
        typeof window.grecaptcha.render === "function" &&
        !window.isCaptchaLoaded?.[`showcaseRecaptcha-${id}`]
      ) {
        const siteKey = showcaseCaptcha.getAttribute("data-sitekey")
        if (siteKey) {
          window.grecaptcha.render(showcaseCaptcha, {
            sitekey: siteKey,
            callback: (token: string) => {
              const clearErrorFn = window[`clearError${id}`]
              if (typeof clearErrorFn === "function") {
                clearErrorFn()
              }
            },
          })
          window.isCaptchaLoaded = {
            ...window.isCaptchaLoaded,
            [`showcaseRecaptcha-${id}`]: true,
          }
          setState((prev) => ({
            ...prev,
            instances: {
              ...prev.instances,
              [`showcaseRecaptcha-${id}`]: true,
            },
          }))
          return true
        }
      }
    } catch (error) {
      console.error("ReCaptcha rendering error:", error)
      if (window.isCaptchaLoaded) {
        window.isCaptchaLoaded[`showcaseRecaptcha-${id}`] = false
      }
    }
    return false
  }, [id])

  const updateTimestamp = useCallback(() => {
    const showcaseCaptcha = document.getElementById(`showcaseRecaptcha-${id}`)
    if (!showcaseCaptcha) return

    const response = showcaseCaptcha.querySelector("#g-recaptcha-response")
    const form = showcaseCaptcha.closest("form")
    const settingsElement = form?.querySelector(
      "input[name='captcha_settings']"
    ) as HTMLInputElement | null

    if (settingsElement) {
      try {
        if (
          !response ||
          !(response instanceof HTMLTextAreaElement) ||
          response.value.trim() === ""
        ) {
          const settings = JSON.parse(settingsElement.value)
          settings.ts = JSON.stringify(new Date().getTime())
          settingsElement.value = JSON.stringify(settings)
        }
      } catch (error) {
        console.error("Error updating timestamp:", error)
      }
    }
  }, [id])

  const timestampIntervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (typeof window === "undefined") return

    if (!window.isCaptchaLoaded) {
      window.isCaptchaLoaded = {}
    }

    let initializationAttempts = 0
    const maxAttempts = 5
    let initializationInterval: NodeJS.Timeout

    const attemptInitialization = () => {
      if (loadAndInitialize()) {
        clearInterval(initializationInterval)
      } else if (++initializationAttempts >= maxAttempts) {
        clearInterval(initializationInterval)
        console.error("Failed to initialize reCAPTCHA after maximum attempts")
      }
    }

    const scriptExists = document.querySelector(
      'script[src*="recaptcha/api.js"]'
    )

    if (!scriptExists) {
      const script = document.createElement("script")
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit"
      script.async = true
      script.defer = true

      script.onload = () => {
        setState((prev) => ({ ...prev, isLoaded: true }))
        // Start initialization attempts after script loads
        initializationInterval = setInterval(attemptInitialization, 1000)
      }

      document.head.appendChild(script)
    } else {
      setState((prev) => ({ ...prev, isLoaded: true }))
      // Start initialization attempts immediately if script exists
      initializationInterval = setInterval(attemptInitialization, 1000)
    }

    // Only create the interval if it doesn't exist
    if (!timestampIntervalRef.current) {
      timestampIntervalRef.current = setInterval(updateTimestamp, 500)
    }

    // Cleanup
    return () => {
      if (timestampIntervalRef.current) {
        clearInterval(timestampIntervalRef.current)
      }
      clearInterval(initializationInterval)
    }
  }, [id, loadAndInitialize, updateTimestamp])

  return state
}
