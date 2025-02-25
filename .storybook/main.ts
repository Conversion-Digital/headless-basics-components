import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: [{ from: "../assets", to: "assets/" }],
  docs: {},

  webpackFinal(config, options) {
    // Example for handling SVGs (if needed)
    // const fileLoaderRule = config.module.rules.find(
    //   (rule) => rule.test && rule.test.test(".svg")
    // );
    // if (fileLoaderRule) {
    //   fileLoaderRule.exclude = /\.svg$/;
    // }
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   enforce: "pre",
    //   loader: require.resolve("@svgr/webpack"),
    // });

    // Add ts-loader for TypeScript files
    if (config.module && config.module.rules) {

    //   config.module.rules.push({
    //     test: /\.css$/,
    //     use: ["style-loader", "css-loader", "postcss-loader"],
    //   });
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', {
    //     loader: 'css-loader',
    //     options: {
    //       modules: true, // Enable modules to help you using className
    //     }
    //   }],
    //   include: path.resolve(__dirname, '../src'),
    // });

    //   config.module.rules.push({
    //     test: /\.(ts|tsx)$/,
    //     exclude: [
    //       /node_modules/,
    //       path.resolve(__dirname, "../src/theme") // Replace with your folder(s)
    //     ],
    //     use: [
    //       {
    //         loader: require.resolve("ts-loader"),
    //         options: {
    //           transpileOnly: true, // Improves build speed by skipping type-checking
    //         },
    //       },
    //     ],
    //   });
    }

    return config;
  },
};

export default config;
