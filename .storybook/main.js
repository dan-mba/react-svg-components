module.exports = {
  framework: '@storybook/react',
  features: {
    storyStoreV7: true
  },
  stories: ['../src/components/**/*.stories.jsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite'
  }
};