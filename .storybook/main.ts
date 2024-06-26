import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [ "@storybook/addon-essentials" ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: false,
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      base: './'
    });
  },
};
export default config;
