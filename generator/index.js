const generateManifest = require("./generate/manifest");

module.exports = (api, options, rootOptions) => {
  const ext = api.hasPlugin("typescript") ? "ts" : "js";

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
