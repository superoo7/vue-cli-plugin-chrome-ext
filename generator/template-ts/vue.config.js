const CopyWebpackPlugin = require("copy-webpack-plugin");

// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options"];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.js`,
    template: "public/index.html",
    filename: `${name}.html`
  };
});

let plugins;
if (process.env.NODE_ENV === "production") {
  plugins = [
    {
      from: api.resolve("src/manifest.production.json"),
      to: `${api.resolve(opts.outputDir)}/manifest.json`
    }
  ];
} else if (process.env.NODE_ENV === "development") {
  plugins = [
    {
      from: api.resolve("src/manifest.development.json"),
      to: `${api.resolve(opts.outputDir)}/manifest.json`
    }
  ];
}

module.exports = {
  pages: pagesObj,
  configureWebpack: {
    plugins: [CopyWebpackPlugins(plugins)]
  }
};
