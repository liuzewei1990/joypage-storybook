module.exports = {
  // "core": { builder: 'webpack5' },
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  // webpackFinal: (config) => {

  //   // less
  //   config.module.rules.push({
  //     test: /\.less$/,
  //     exclude: /\.module\.less$/,
  //     use: getLoaderForStyle(),
  //   });

  //   // less css modules
  //   config.module.rules.push({
  //     test: /\.module\.less$/,
  //     use: getLoaderForStyle({ modules: true }),
  //   });

  //   // svg modules
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['vue-loader', 'vue-svg-loader'],
  //   });

  //   return config;
  // },
}

function getLoaderForStyle(cssOptions) {
  return [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: cssOptions,
    },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ];
}
