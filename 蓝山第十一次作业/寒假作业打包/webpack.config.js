const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin =require('mini-css-extract-plugin')
const path=require('path')
//  const dev =process.env.mode === 'DEVELOPMENT'
/**
 * @type {import('webpack').Configuration}
 */

module.exports={
    mode:"development",
    //入口
    entry:"./src/main.js",
    //输出
    output:{
        //文件的输出路径
        path: path.resolve(__dirname,"dist"),
        //文件名
        filename:"static/js/main.js",
        clean:true
    },
    //加载器
    module:{
        rules:[
            //loader的配置
            {
                test: /\.css$/,
                use: [(process.env.mode === 'development' ? "style-loader": MiniCssExtractPlugin.loader),
                {
                    loader:'css-loader',
                    options:{
                        importLoaders: 1
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            // 添加"autoprefixer"插件
                            plugins: [require('autoprefixer')]
                        }
                    } 
                },'less-loader']
                
            },
            {
                test: /\.less$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.styl$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'stylus-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset',
               parser: {
                dataUrlCondition: {
                   maxSize: 10 * 1024 // 10kb
                },
               },
               generator: {
                filename: 'static/image/[hash:10][ext][query]'
              }
            },
            {
                test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
                type: 'asset/resource',
               generator: {
                filename: 'static/media/[hash:10][ext][query]'
              }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,//排除nodemodules中的js文件
                loader: 'babel-loader',
            },
            // {
            //     test: path.resolve(__dirname, ""),
            //     use: {
            //         loader:"imports-loader",
            //         options:{ $:'jquery' }
            //     }
            // }
        ],
    },
    //插件
    plugins: [
        new ESLintPlugin({
            //检测那些文件
            context: path.resolve(__dirname,"src")
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'static/html/sign_up.html',
            // chunks:['sign_up'],
            // favicon:"./src/favicon1.ico"
            
        }),
        new HtmlWebpackPlugin({
            template:'./public/account.html',
            filename:'static/html/account.html',
            // chunks:['account'],
            // favicon:"./src/favicon1.ico"
            
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'static/html/index.html',
            // chunks:['index'],
            // favicon:"./src/favicon1.ico"
        }),
        new MiniCssExtractPlugin()
    ],
    // 开发服务器 不会输出资源，在内存中编译打包
    devServer: {
        host: "localhost",//启动服务器域名
        port:"3000",
        open: true,//是否自动打开浏览器
    },
    // 模式
}