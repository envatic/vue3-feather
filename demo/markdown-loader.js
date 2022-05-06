/* eslint-disable @babel/no-invalid-this */
import marked from "marked";


require("prismjs/components/prism-javascript");

module.exports = function (source) {
  const html = parse(source, {
    highlight(str, lang) {
      return Prism.highlight(
        str,
        Prism.languages[lang] || Prism.languages.markup
      );
    },
  });

  return `export default ${JSON.stringify(html)}`;
};
