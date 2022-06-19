// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require('vite');

module.exports = {
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      base: './'
    });
  },
  framework: '@storybook/react',
  features: {
    storyStoreV7: true
  },
  stories: ['../src/components/**/*.stories.jsx'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite'
  }
};