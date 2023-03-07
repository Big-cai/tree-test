const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    // 输出
    output: {
        path: path.resolve(__dirname,'dist/lib'),
        library: 'LUI', // 库的名字
        libraryTarget: 'umd',
    },

    // 输入
    module: {
        rules: [
           { 
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'LUI',
            template: 'index.html'
        })
    ],
    resolve: {  //文件扩展名需要添加ts
        extensions: ['.tsx','.ts', '.js'],
      },
    // 服务器配置
    devServer: {
        open: true, // 自动打开浏览器
        port: 8080, // 热替换 外网访问
    }
}