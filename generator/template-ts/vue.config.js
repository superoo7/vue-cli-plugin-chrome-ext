// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options"];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.ts`,
    template: "public/index.html",
    filename: `${name}.html`
  };
});

module.exports = {
  pages: pagesObj
};
