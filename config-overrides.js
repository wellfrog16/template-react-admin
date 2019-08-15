const StyleLintPlugin = require('stylelint-webpack-plugin');
const {
    override,
    addTslintLoader,
    addWebpackPlugin,
    disableEsLint,
} = require("customize-cra");

module.exports = override(
    disableEsLint(),
    addTslintLoader(),
    addWebpackPlugin(
        new StyleLintPlugin({
            context: './src',
            files: ['**/*.less', '**/*.s?(a|c)ss'],
        })
    ),
);