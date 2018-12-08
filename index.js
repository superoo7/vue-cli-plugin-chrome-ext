module.exports = (api, opts) => {
  api.extendPackage({
    devDependencies: {
      "@types/chrome": "^0.0.75"
    }
  });

  api.chainWebpack(webpackConfig => {
    // modify webpack config with webpack-chain
  });

  api.configureWebpack(webpackConfig => {
    // modify webpack config
    // or return object to be merged with webpack-merge
  });
};
