const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry: { //这里定义多页面入口js
        index:path.resolve(__dirname, 'js/index.js'),
        login:path.resolve(__dirname, 'js/login.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].boundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'login.html',
            template: 'login.html',
            chunks:['login'] //这里规定使用哪个js块
        }),

        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'index.html',
            chunks:['index'] //这里规定使用哪个js块
        })
    ],
    devServer:{
        compress: true,
        port: 9000,
        open:true,
        openPage:'login.html',
        hot:true,
        host:'localhost'
    }
};