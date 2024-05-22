const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080
    }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry: {
    main: './src/index.js',
    var: './src/styles/var.scss',
    stylesheet: './src/styles/stylesheet.css'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'styles/[name].css'
    })
 ],
  module: {
    rules: [
        {
            test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
            type: 'asset/inline'                  
        },
        {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            type: 'asset/resource',
            generator: {
            filename: 'assets/fonts/[name][ext]'
            } 
        },
        {
            test: /\.html$/i,
            loader: "html-loader"
        },
        {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader'
            ]
        },
        {
            test: /\.scss$/i,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
            ]
        }
    ]
  },
  ...devServer(develop),   
});