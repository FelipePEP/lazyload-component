const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main/index.tsx',

    // bundle gerado
    output:{
        path: path.join(__dirname, 'public/js'),
        publicPath: '/public/js',
        filename: 'bundle.js'   // mesmo nome usado no index.html
    },

    // extensões permitidas
    resolve:{
        extensions: ['.ts', '.tsx', '.js', '.scss'],
        alias:{
            '@': path.join(__dirname, 'src')    // apelido para usar @ nas rotas
        }
    },

    // regras
    module:{
        rules:[{
            test: /\.ts(x?)$/,
            loader: 'ts-loader',
            exclude: /node_modules/
            }, {
            test: /\.scss$/,
            use:[{
                loader:'style-loader'
                }, {
                    loader:'css-loader',
                    options: {
                        modules: true // arquivo sass vira um modulo e suas classes podem ser acessadas pelo react via js
                    }
                }, {
                    loader: 'sass-loader'
                }
            ]
            
        }]
    },

    // configurações do dev server
    devServer:{
        devMiddleware: {
            writeToDisk: true // carrega o bundle em memoria
          },
        static: {
            directory: './public'
        },          
        historyApiFallback: true,   // ignora restrição à rota raiz
        port: 8080        
    },

    // scripts excluidos do bundle
    externals:{
        react:'React',
        'react-dom': 'ReactDOM',
    },

    // extendendo o webpack
    plugins:[
        new CleanWebpackPlugin() // higieniza cache 
    ]
}