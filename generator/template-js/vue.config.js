const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

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
      from: path.resolve("src/manifest.production.json"),
      to: `${path.resolve("dist")}/manifest.json`
    }
  ];
} else if (process.env.NODE_ENV === "development") {
  plugins = [
    {
      from: path.resolve("src/manifest.development.json"),
      to: `${path.resolve("dist")}/manifest.json`
    }
  ];
}

module.exports = {
  pages: pagesObj,
  configureWebpack: {
    plugins: [CopyWebpackPlugin(plugins)]
  }
};
