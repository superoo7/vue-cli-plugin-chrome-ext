const generateManifest = require("./generate/manifest");
const generateIndex = require("./generate/generateIndex")
const deleteFile = require("./generate/deleteFile")
// const path = require("path");

module.exports = (api, options, { vueVersion }) => {
  const { script, delete_file } = options;

  // create file
  api.render(`./template-${script}`);

  const extPkg = {
    scripts: {
      "build-watch": "vue-cli-service build-watch"
    },
    devDependencies: {
      "copy-webpack-plugin": "^4.6.0"
    }
  };
  const isTypeScript = script === "ts"

  if (isTypeScript) {
    extPkg.devDependencies = {
      ...extPkg.devDependencies,
      "@types/chrome": "^0.0.75"
    };
  }
  api.extendPackage(extPkg);

  api.onCreateComplete(() => {
    // add manifest.json and index.js or index.ts to folder
    const manifestPath = api.resolve("./src");
    generateIndex(api.resolve("./src/options"), vueVersion, isTypeScript);
    generateIndex(api.resolve("./src/popup"), vueVersion, isTypeScript);
    generateManifest(options, manifestPath, vueVersion);
    if (delete_file) deleteFile(api.resolve("./"), isTypeScript);

  });
};