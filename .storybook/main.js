const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }],
  webpackFinal: async config => {
    config.resolve.alias = { ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components/')
    };
    return config;
  },
  core: {
    builder: "webpack5"
  }
};