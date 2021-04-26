const generateIndexFile = (api, vueVersion, isTypeScript, componentsName) => {
    const fs = require("fs");
    const onlyScriptFile = ['background', 'content']

    if (!onlyScriptFile.includes(componentsName)) {
        const renderPath = `./src/${componentsName}/index.${isTypeScript ? 'js' :'ts' }`;
        const renderTemplate = `../vueIndex/vue${vueVersion}Index.js`;
        api.render({
            [renderPath]:renderTemplate
        })
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
