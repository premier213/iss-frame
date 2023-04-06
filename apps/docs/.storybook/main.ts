import { mergeConfig } from "vite";

const config: any = {
  core: {},
  stories: ["../../../libs/**/*.stories.mdx", "../../../libs/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y",
    "storybook-addon-designs",
    "@storybook/addon-storysource",
    "storybook-tailwind-dark-mode",
    "storybook-dark-mode",
    "@storybook/addon-console",
  ],
  async viteFinal(config: any) {
    return mergeConfig(config, {});
  },
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "apps/docs/vite.config.ts",
      },
    },
  },
  docs: {
    autodocs: true,
  },
};
module.exports = config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
