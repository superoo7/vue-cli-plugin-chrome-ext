# vue-cli-plugin-chrome-ext

English | [简体中文](./README-zh_CN.md) | [繁體中文](./README-zh_TW.md)

[![npm version](https://badge.fury.io/js/vue-cli-plugin-chrome-ext.svg)](https://www.npmjs.com/package/vue-cli-plugin-chrome-ext)

Start a chrome extension project with Vue-CLI with ease!

support vue2 vue3 TypeScript and JavaScript!

<img src="./logo.png" height="48" width="48">

_Logo from FontAwesome_

## Installation

This plugin is meant for using new project for chrome extensions. Tested on default project of Vue, Vue with TypeScript

## Usage?

```
vue create <project-name>
# Answer some questions
cd <project-name>
vue add vue-cli-plugin-chrome-ext
# Answer some questions
# 🎉
```

### Run Development mode and Production

- Run development mode with `npm run build-watch` and a `dist` file will be generated. Install [Extension Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) to reload chrome extensions easily everytime you reload. (take note that when u change manifest.json file, it will not automatically load, you need to click update extension )
- Build for production `npm run build` and zip it and deploy onto chrome store.

## TODO

## Development

### Testing

#### Development

Currently, testing is done manually with the file `./auto.sh`, by passing `-r` flag, it will delete the initial file generated.

#### Production

Test production code in npm as well with `./prod.sh`.

### prompts.js

Vue CLI prompt is based on [inquirer.js](https://github.com/SBoudrias/Inquirer.js) api.

## Resources

- https://itnext.io/how-to-build-a-simple-vue-cli-plugin-a2e1323de1a0

## Credit

- https://github.com/zwenza/vue-cli-plugin-build-watch
- https://github.com/RequireSun/vue-cli-plugin-chrome-extension

## License

MIT
