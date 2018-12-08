const generateManifest = (options, manifestPath) => {
  const fs = require("fs");
  const { version_no: version, description, name } = options;
  const manifestJson = {
    manifest_version: 2,
    name,
    description,
    version,
    options_page: "options.html",
    browser_action: {
      default_popup: "popup.html"
    }
  };

  // Production build of manifest.json
  fs.writeFileSync(
    `${manifestPath}/manifest.production.json`,
    JSON.stringify(manifestJson, null, 4),
    {
      encoding: "utf-8"
    }
  );
  // Development build of manifest.json
  manifestJson["content_security_policy"] =
    "script-src 'self' 'unsafe-eval'; object-src 'self'";
  fs.writeFileSync(
    `${manifestPath}/manifest.development.json`,
    JSON.stringify(manifestJson, null, 4),
    {
      encoding: "utf-8"
    }
  );
};

module.exports = generateManifest;
