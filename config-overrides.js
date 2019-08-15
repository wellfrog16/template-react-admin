const StyleLintPlugin = require('stylelint-webpack-plugin');
const {
    override,
    addTslintLoader,
    addWebpackPlugin,
    fixBabelImports,
    addLessLoader,
    addWebpackExternals,
} = require("customize-cra");

module.exports = {
    webpack: override(
        addTslintLoader(),
        addWebpackPlugin(
            new StyleLintPlugin({
                context: './src',
                files: ['**/*.less', '**/*.s?(a|c)ss'],
            })
        ),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: {
                // '@primary-color': '#1890ff',
            },
        }),
        addWebpackExternals({
            moment: 'moment',
        }),
    ),
    // devServer: (configFunction) => {
    //     return (proxy, allowedHost) => {
    //         const config = configFunction(proxy, allowedHost);
    //         config.quiet = false;
    //         return config;
    //     };
    // },
};