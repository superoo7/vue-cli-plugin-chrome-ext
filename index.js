module.exports = (api, opts) => {
  const ext = api.hasPlugin("typescript") ? "ts" : "js";

  api.chainWebpack(webpackConfig => {
    // remove split chunks for chrome extension, make sure everything in a file
    webpackConfig.optimization.delete("splitChunks");
  });

  api.configureWebpack(webpackConfig => {
    // modify webpack config
    // or return object to be merged with webpack-merge
  });
};
