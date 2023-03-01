// use `mergeConfig` to recursively merge Vite options
const {
  mergeConfig
} = require('vite');
module.exports = {
  async viteFinal(config, {
    configType
  }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      base: './'
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/components/**/*.stories.jsx'],
  addons: ['@storybook/addon-essentials'],
  core: {},
  docs: {
    autodocs: false
  }
};