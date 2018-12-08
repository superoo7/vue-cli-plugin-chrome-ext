module.exports = (api, opts) => {
  api.chainWebpack(webpackConfig => {
    // remove split chunks for chrome extension, make sure everything in a file
    webpackConfig.optimization.delete("splitChunks");
    if (process.env.NODE_ENV === "production") {
      webpackConfig.plugin("copy").use(require("copy-webpack-plugin"), [
        [
          {
            from: api.resolve("src/manifest.production.json"),
            to: `${api.resolve(opts.outputDir)}/manifest.json`
          }
        ]
      ]);
    } else if (process.env.NODE_ENV === "development") {
      webpackConfig.plugin("copy").use(require("copy-webpack-plugin"), [
        [
          {
            from: api.resolve("src/manifest.development.json"),
            to: `${api.resolve(opts.outputDir)}/manifest.json`
          }
        ]
      ]);
    }
  });

  api.configureWebpack(webpackConfig => {});

  api.registerCommand("build-watch", (...args) => {
    api.configureWebpack(webpackConfig => {
      webpackConfig.watch = true;
    });
    api.service.run("build", ...args);
  });
};
