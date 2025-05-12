const path = require('path');
// 数字孪生智慧xx管理平台
const Common_config = require('./public/aircity/Config');

const title = Common_config.title || '鸿蒙智慧农业';

// 导出配置对象
module.exports = {
    // 设置公共路径
    publicPath: '/',
    
    // 开发服务器配置
    devServer: {
        // 自动打开浏览器
        open: true,
        // 设置端口号
        port: 8090,
        // 移除 overlay 属性
        proxy: {
            '/air': {
                target: 'http://189.1.245.236:8000',
                changeOrigin: true,
                pathRewrite: { '^/air': '/air' }
            },
            '/soil': {
                target: 'http://189.1.245.236:8000',
                changeOrigin: true,
                pathRewrite: { '^/soil': '/soil' }
            },
            '/controll': { // 新增 controll 代理，包含所有 /controll/xxx 路径
                target: 'http://189.1.245.236:8000',
                changeOrigin: true,
                pathRewrite: { '^/controll': '/controll' }
            }
        }
    },
    // CSS 配置
    css: {
        // 启用源码映射
        sourceMap: true, 
        // 加载器选项
        loaderOptions: {
            sass: {
                // 在每个 Sass 文件中引入公共样式
                additionalData: "@import '@/styles/common.scss';"
            }
        }
    },
    // 配置 Webpack 链式操作
    chainWebpack: config => {
        // 修改 HTML 插件配置
        config.plugin('html').tap(args => {
            // 设置页面标题
            args[0].title = title;
            return args;
        });
        // 生产环境优化
        if (process.env.NODE_ENV === 'production') {
            // 配置 terser 插件
            config.optimization.minimizer('terser').tap(args => {
                // 移除 console.log 调用
                args[0].terserOptions.compress.drop_console = true;
                // 移除 debugger 语句
                args[0].terserOptions.compress.drop_debugger = true;
                // 移除纯函数调用
                args[0].terserOptions.compress.pure_funcs = ['console.log'];
                // 移除注释
                args[0].terserOptions.output = {
                    comments: false
                };
                return args;
            });
        }
    },
    // 配置 Webpack
    configureWebpack: {
        resolve: {
            // 设置资源扩展名
            extensions: ['.js', '.vue', '.json', '.ts', '.tsx'], // 加入ts 和 tsx
            // 设置别名
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
};