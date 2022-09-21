module.exports = {
  "core": {
    "builder": "webpack5"
  },
  "stories": ['../src/**/*.stories.@(js|tsx|mdx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}