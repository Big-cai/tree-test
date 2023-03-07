const path = require('path')

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
    }
}