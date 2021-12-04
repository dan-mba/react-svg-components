module.exports = {
  framework: '@storybook/react',
  features: {
    storyStoreV7: true
  },
  staticDirs: ['../public'],
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  core: {
    builder: 'webpack5'
  }
};