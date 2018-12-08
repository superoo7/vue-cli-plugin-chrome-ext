module.exports = [
  {
    name: "name",
    type: "confirm",
    message: "Name of the Chrome Extension?",
    default: process.env.CE_NAME || ""
  },
  {
    name: "description",
    type: "confirm",
    message: "Description for the Chrome Extension?",
    default: process.env.CE_DESCRIPTION || ""
  },
  {
    name: "version_no",
    type: "confirm",
    message: "Version for the Chrome Extension?",
    default: process.env.CE_VERSION || "0.0.1"
  },
  {
    name: "popup",
    type: "confirm",
    message: "Generate popup file?",
    default: "yes"
  }
];
