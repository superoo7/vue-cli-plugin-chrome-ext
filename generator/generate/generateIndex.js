const generateIndexFile = (path, vueVersion, isTypeScript, componentsName) => {
    const fs = require("fs");
    const onlyScriptFile = ['background', 'content']

    if (!onlyScriptFile.includes(componentsName)) {
        const vueIndex = vueVersion === "3" ?
            `import { createApp } from "vue";
    import App from "./App/App.vue";
    
    createApp(App).mount("#app");
    ` :
            `import Vue from "vue";
    import AppComponent from "./App/App.vue";
    Vue.component("app-component", AppComponent);
    new Vue({
    el: "#app",
    render: createElement => {
    return createElement(AppComponent);
        }
    });`
        // generate index.js or index.ts
        fs.writeFileSync(
            `${path}/index.${!isTypeScript ? 'js' : 'ts'}`,
            vueIndex,
            {
                encoding: "utf-8"
            }
        );
    } else {
        // just only script file and folder
        fs.mkdir(`src/${componentsName}`, (err) => {
            if (!err) {
                fs.writeFileSync(
                    `src/${componentsName}/index.${!isTypeScript ? 'js' : 'ts'}`,
                    `console.log('hello world ${componentsName} todo something~')`,
                    {
                        encoding: "utf-8"
                    }
                );
            } else {
                console.log('err', err);
            }
        })
    }

};

module.exports = generateIndexFile;
