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
}, {
  name: "delete_file",
  type: "confirm",
  message: "delete Initial file? (src/main.js src/components public/index.html public/favicon)",
  default: true
}, {
  type: "checkbox",
  message: "Please select the required components :",
  name: "components",
  choices: [
    "background",
    "popup",
    "content",
    "options"
  ],
  default: ['popup', 'content'],
}];