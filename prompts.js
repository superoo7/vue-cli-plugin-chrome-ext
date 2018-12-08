const { version, name, description } = require("./package.json");

module.exports = [
  {
    name: "name",
    type: "input",
    message: "Name of the Chrome Extension?",
    default: name || ""
  },
  {
    name: "description",
    type: "input",
    message: "Description for the Chrome Extension?",
    default: description || ""
  },
  {
    name: "version_no",
    type: "input",
    message: "Version for the Chrome Extension?",
    default: version || "0.0.1"
  }
];
