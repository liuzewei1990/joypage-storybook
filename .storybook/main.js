module.exports = {
  // "core": { builder: 'webpack5' },
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  webpackFinal: (config) => {

    // less loader
    config.module.rules.push({
      test: /\.less$/,
      exclude: /\.module\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    });

    // .svg loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['vue-loader', 'vue-svg-loader'],
    });

    return config;
  },
}
