const generateManifest = require("./generate/manifest");
const fs = require("fs-extra");
const path = require("path");

module.exports = (api, options, rootOptions) => {
  const ext = options.script;

  // remove file
  const deleteFiles = [
    path.resolve(process.cwd(), "src"),
    path.resolve(process.cwd(), "public" + path.sep + "index.html")
  ];
  fs.remove(deleteFiles);

  // create file
  api.render(`./template-${ext}`);

  const extPkg = {
    scripts: {
      "build-watch": "vue-cli-service build-watch"
    },
    devDependencies: {
      "copy-webpack-plugin": "^4.6.0"
    }
  };
  if (ext === "ts") {
    extPkg.devDependencies = {
      ...extPkg.devDependencies,
      "@types/chrome": "^0.0.75"
    };
  }
  api.extendPackage(extPkg);

  api.onCreateComplete(() => {
    // add manifest.json to src file
    const manifestPath = api.resolve("./src");
    generateManifest(options, manifestPath);
  });
};
