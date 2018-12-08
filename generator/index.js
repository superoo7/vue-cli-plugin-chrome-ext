const generateManifest = require("./generate/manifest");
const rimraf = require("rimraf");

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
    // remove file
    const scriptType = options.script;
    const deleteFile =
      scriptType === "js"
        ? [
            api.resolve("./src/assets/logo.png"),
            api.resolve("./src/components"),
            api.resolve("./src/App.vue"),
            api.resolve("./src/main.js")
          ]
        : [
            api.resolve("./src/assets/logo.png"),
            api.resolve("./src/components"),
            api.resolve("./src/App.vue"),
            api.resolve("./src/main.ts")
          ];

    try {
      deleteFile.forEach(filename => rimraf(filename));
    } catch (err) {
      console.log(`Unable to delete file`);
    }
  });
};
