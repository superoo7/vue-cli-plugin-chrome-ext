# vue-cli-plugin-chrome-ext

[![npm version](https://badge.fury.io/js/vue-cli-plugin-chrome-ext.svg)](https://www.npmjs.com/package/vue-cli-plugin-chrome-ext)

Start a chrome extension project with Vue-CLI with ease!

![chrome logo](./logo.png =100x100)

_Logo from FontAwesome_

## Installation

This plugin is meant for using new project for chrome extensions. Tested on default project of Vue, Vue with TypeScript

### For TypeScript

- Create a new project with `vue create test-project`, and select typescript without class-style component syntax
- Then, add this plugin with `vue add chrome-ext`.
- Clean up the repo by removing `src/main.ts`, `src/components`, `public/favicon.ico` and `public/index.html`

### For JavaScript

- Create a new project with `vue create test-project`.
- Then, add this plugin with `vue add chrome-ext`.
- Clean up the repo by removing `src/main.js`, `src/components`, `public/favicon.ico` and `public/index.html`

### Run Development mode and Production

- Run development mode with `npm run build-watch` and a `dist` file will be generated. Install Extension Reloader to reload chrome extensions easily everytime you reload.Install [Extension Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) to reload chrome extensions easily everytime you reload. (take note that when u change manifest.json file, it will not automatically load, you need to remove and add the chrome extensions)
- Build for production `npm run build` and zip it and deploy onto chrome store.

## Current feature

- Generate manifest.json
- Generate popup.html
- Generate options.html
- Emit file out
- Support TypeScript (only generated with `vue add typescript`)

## TODO

### High Priority

- Add background script
- Make options to generate certain files

### Medium Priority

- Move over with this [template](https://github.com/posva/vue-plugin-template)
- Clean up src and public file.

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
