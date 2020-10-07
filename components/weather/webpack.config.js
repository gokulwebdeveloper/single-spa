const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sample",
    projectName: "sample",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
    rules: [
      { // sass / scss loader for webpack
            test: /\.(sass|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'resolve-url-loader',
                'sass-loader?sourceMap'
            ],
        },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  });
};
