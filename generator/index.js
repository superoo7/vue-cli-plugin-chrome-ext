const generateManifest = require("./generate/manifest");

module.exports = (api, options, rootOptions) => {
  console.log(rootOptions);
  console.log(options);
  api.extendPackage({
    devDependencies: {
      "@types/chrome": "^0.0.75"
    }
  });

  api.onCreateComplete(() => {
    // add manifest.json to src file
    const manifestPath = api.resolve("./public/manifest.json");
    generateManifest(options, manifestPath);
  });
};
