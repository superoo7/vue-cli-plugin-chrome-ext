const generateManifest = (path, vueVersion, isTypeScript) => {
    const fs = require("fs");
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

};

module.exports = generateManifest;
