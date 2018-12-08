module.exports = (api, opts) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.optimization.delete("splitChunks");
  });

  api.configureWebpack(webpackConfig => {
    // modify webpack config
    // or return object to be merged with webpack-merge

    const { version, name, description } = require("./package.json");

    webpackConfig.plugin("define").tap(([options = {}]) => {
      return [
        {
          ...options, // these are the env variables from your .env file, if any arr defined
          CE_VERSION: JSON.stringify(version),
          CE_DESCRIPTION: JSON.stringify(description),
          CE_NAME: JSON.stringify(name)
        }
      ];
    });
  });
};
