// const path = require('path');

const StyleLintPlugin = require('stylelint-webpack-plugin');
const {
    override,
    addTslintLoader,
    addWebpackPlugin,
    fixBabelImports,
    addLessLoader,
    addWebpackExternals,
    // addWebpackAlias,
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
        // addWebpackAlias({
        //     '@': path.resolve(__dirname, './src')
        // }),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: {
                // '@primary-color': '#1890ff',
                // '@primary-color': '#1890ff', // 全局主色
                // '@link-color': '#1890ff', // 链接色
                // '@success-color': '#52c41a', // 成功色
                // '@warning-color': '#faad14', // 警告色
                // '@error-color': '#f5222d', // 错误色
                // '@font-size-base': '14px', // 主字号
                // '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
                // '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
                // '@text-color-secondary' : 'rgba(0, 0, 0, .45)', // 次文本色
                // '@disabled-color': 'rgba(0, 0, 0, .25)', // 失效色
                // '@border-radius-base': '4px', // 组件/浮层圆角
                // '@border-color-base': '#d9d9d9', // 边框色
                // '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
            },
        }),
        addWebpackExternals({
            moment: 'moment',
        }),
        (config) => {
            // !!!确保这里是eslint-loader
            const loader = config.module.rules[2];
            // !!!确保这里是eslint-loader的options
            const { options } = loader.use[0];
            options.emitError = true;
            return config;
        },
    ),
    // devServer: (configFunction) => {
    //     return (proxy, allowedHost) => {
    //         const config = configFunction(proxy, allowedHost);
    //         config.quiet = false;
    //         return config;
    //     };
    // },
};