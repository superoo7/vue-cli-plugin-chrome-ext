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
    const fs = require("fs");
    const { CE_VERSION, CE_DESCRIPTION, CE_NAME } = process.env;
    const manifestJson = {
      manifest_version: 2,
      name: CE_NAME || "chrome extension",
      description: CE_DESCRIPTION || "",
      version: CE_VERSION || "0.0.1"
    };
    fs.writeFileSync(
      api.resolve("./public/manifest.json"),
      JSON.stringify(manifestJson, null, 4),
      {
        encoding: "utf-8"
      }
    );
  });
};
