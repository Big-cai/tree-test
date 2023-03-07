const base = require('./webpack.config')

module.exports = Object.assign({},base,{
    mode: 'production',
    // // 告诉webpack 这是外部的
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    }
}) 

