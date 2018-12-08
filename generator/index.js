const generateManifest = require("./generate/manifest");

module.exports = (api, options, rootOptions) => {
  const ext = api.hasPlugin("typescript") ? "ts" : "js";

  api.render(`./template-${ext}`);

  if (ext === "ts") {
    api.extendPackage({
      devDependencies: {
        "@types/chrome": "^0.0.75"
      }
    });
  }

  api.onCreateComplete(() => {
    // add manifest.json to src file
    const manifestPath = api.resolve("./public/manifest.json");
    generateManifest(options, manifestPath);
  });
};
