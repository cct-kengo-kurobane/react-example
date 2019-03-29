const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/js",
        publicPath: "/js/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        publicPath: "/js/",
        watchContentBase: true,
        contentBase: path.join(__dirname, 'public'),
        hot: true
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
          tslint: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
              ]
            },
            { 
              test: /\.tsx?$/, 
              use: [
                {
                  loader: "ts-loader", 
                  options: {
                    transpileOnly: true
                  }
                }
              ]
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
