import "./global-styles.css";

import React, { useEffect } from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { useDarkMode } from "../src/utils/useDarkMode";
import { useThemeMode } from "../src/utils/useThemeMode";


const preview: Preview = {
  parameters: {
    //layout: "fullscreen",
    // actions: { argTypesRegex: "^on[A-Z].*" },
    // controls: {
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/,
    //   },
    // },
    staticDirs: ["../assets"],
  },
  tags: ['autodocs'],
};

export const decorators = [
  (Story) => (
    <Wrapper>
      <Story />
    </Wrapper>
  ),
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "cl-dark dark",
    },
    defaultTheme: "light",
  }),
];

export const Wrapper = ({ children }) => {
  const { computedMode, setMode } = useThemeMode();
  const isDarkMode = useDarkMode();

  useEffect(() => {
    setMode(isDarkMode ? "dark" : "light");
  }, [computedMode, isDarkMode]);

  return (
    <div className="@conversiondigital/-chat-plugin">
      <div className={computedMode === "dark" ? "cl-dark" : ""}>{children}</div>
    </div>
  );
};

export default preview;
