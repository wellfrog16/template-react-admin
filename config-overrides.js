const path = require('path');

const StyleLintPlugin = require('stylelint-webpack-plugin');
const {
    override,
    addTslintLoader,
    addWebpackPlugin,
    fixBabelImports,
    addLessLoader,
    addWebpackExternals,
    addWebpackAlias,
} = require("customize-cra");

module.exports = {
    webpack: override(
        addTslintLoader({
            emitErrors: true,
        }),
        addWebpackPlugin(
            new StyleLintPlugin({
                context: './src',
                files: ['**/*.less', '**/*.s?(a|c)ss'],
            })
        ),
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src')
        }),
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
        (config) => {
            console.log(config.module.rules[2].use[0].options);
            // !!!确保这里是eslint-loader
            const loader = config.module.rules[2];
            // !!!确保这里是eslint-loader的options
            const { options } = loader.use[0];
            options.emitError = true;
            return config;
        },
    ),
    devServer: (configFunction) => {
        return (proxy, allowedHost) => {
            const config = configFunction(proxy, allowedHost);
            config.quiet = false;
            config.open = false;
            return config;
        };
    },
};