const prism = require("prismjs");
module.exports = {
  css: {
    extract: true,
  },

  chainWebpack(config) {
    config.plugin("eslint").tap((args) => {
      args[0].failOnError = false;
      return args;
    });
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader",
            },
            {
              loader: "markdown-loader",
              options: {
                highlight: function (code, lang) {
                  if (prism.languages[lang]) {
                    return prism.highlight(
                      code,
                      prism.languages[lang] || prism.languages.markup,
                      lang
                    );
                  } else {
                    return code;
                  }
                },
              },
            },
          ],
        },
      ],
    },
  },
  transpileDependencies: true,
};
