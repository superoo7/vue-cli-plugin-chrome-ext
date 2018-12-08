module.exports = [{
    name: "name",
    type: "input",
    message: "Name of the Chrome Extension?",
    default: "chrome-ext"
  },
  {
    name: "description",
    type: "input",
    message: "Description for the Chrome Extension?",
    default: "chrome extension"
  },
  {
    name: "version_no",
    type: "input",
    message: "Version for the Chrome Extension?",
    default: "0.0.1"
  },
  {
    name: "script",
    type: "list",
    message: "javascript or typescript?",
    choices: ["js", "ts"],
    default: "js"
  }
];