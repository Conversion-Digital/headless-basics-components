console.log("Babel Environment:", process.env.STORYBOOK_ENV || "none");

const pluginsBuild = [
  [
    "babel-plugin-add-import-extension",
    {
      extension: "js",
      exclude: ["\\.css$", "\\.module\\.css$"] // ⬅️ Prevents modification of CSS imports
    }
  ],
  [
    "file-loader",
    {
      "name": "[name].[ext]",
      "publicPath": "/assets/",
      "outputPath": "assets/",
      "context": "",
      "extensions": ["png", "jpg", "jpeg", "gif", "svg", "webp", "woff", "woff2", "eot", "ttf", "otf"],
    }
  ]
];

const pluginsStorybook = [
  [
    "file-loader",
    {
      "name": "[name].[ext]",
      "publicPath": "/assets/",
      "context": "",
      "extensions": ["png", "jpg", "jpeg", "gif", "svg", "webp"],
    }
  ]
];

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  ignore: [
    "**/*.stories.js",
    "**/*.stories.tsx",
    "**/*.test.js",
    "**/*.test.ts"
  ],
  plugins: process.env.STORYBOOK_ENV === "storybook" ? pluginsStorybook : pluginsBuild
};
