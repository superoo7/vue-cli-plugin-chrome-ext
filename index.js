module.exports = (api, opts) => {
  api.chainWebpack(webpackConfig => {
    // modify webpack config with webpack-chain
  });

  api.configureWebpack(webpackConfig => {
    // modify webpack config
    // or return object to be merged with webpack-merge
    webpackConfig.plugin("define").tap(([options = {}]) => {
      return [
        {
          ...options, // these are the env variables from your .env file, if any arr defined
          CE_VERSION: JSON.stringify(require("./package.json").version),
          CE_DESCRIPTION: JSON.stringify(require("./package.json").description),
          CE_NAME: JSON.stringify(require("./package.json").name)
        }
      ];
    });
  });
};
