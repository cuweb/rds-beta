const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@whitespace/storybook-addon-html',
    ],
    webpackFinal: async (config) => {
        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config.resolve.extensions,
            }),
        ]
        return config
    },
}
