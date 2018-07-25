/* constants */
const isDev = process.env.NODE_ENV !== "production";
const isHttps = true;
const outputFolder = "dist";
const isDeploy = process.env.DEPLOY;

/* imports */
const packageJson = require("./package.json");
const path = require("path");
const webpack = require("webpack");
const NodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const node = {
    name: "node",
    devtool: isDev ? "eval" : "hidden-source-map",
    target: "node",
    node: {
        __dirname: true
    },
    externals: [NodeExternals()],
    entry: ["./app.babel.js"],
    output: {
        path: __dirname,
        filename: "app.js"
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            "process.env.isDev": isDev,
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            "process.env.NAME": JSON.stringify(packageJson.name),
            "process.env.DESCRIPTION": JSON.stringify(packageJson.description),
            "process.env.VERSION": JSON.stringify(packageJson.version),
            "process.env.AUTHOR.NAME": JSON.stringify(packageJson.author.name),
            "process.env.AUTHOR.EMAIL": JSON.stringify(
                packageJson.author.email
            ),
            "process.env.AUTHOR.URL": JSON.stringify(packageJson.author.url),
            "process.env.isHttps": isHttps,
            "process.env.outputFolder": JSON.stringify(outputFolder)
        })
    ].concat(
        isDev
            ? []
            : [
                  new webpack.optimize.UglifyJsPlugin({
                      mangle: false,
                      sourceMap: false
                  })
              ]
    ),
    module: {
        loaders: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    fix: true,
                    emitWarning: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env"],
                    plugins: [
                        "transform-object-rest-spread"
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: [".js"],
        alias: {
            api: path.resolve(__dirname, "./api")
        }
    }
};

const web = {
    name: "web",
    devtool: isDev ? "eval" : "hidden-source-map",
    context: path.join(__dirname, "src"),
    entry: {
        "index.js": ["./js/index.js"],
        "style.css": "./scss/style.scss",
        "inline.css": "./scss/inline.scss"
    },
    output: {
        path: path.join(__dirname, outputFolder),
        filename: "[name]"
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            "process.env.NAME": JSON.stringify(packageJson.name),
            "process.env.DESCRIPTION": JSON.stringify(packageJson.description),
            "process.env.VERSION": JSON.stringify(packageJson.version),
            "process.env.AUTHOR.NAME": JSON.stringify(packageJson.author.name),
            "process.env.AUTHOR.EMAIL": JSON.stringify(
                packageJson.author.email
            ),
            "process.env.AUTHOR.URL": JSON.stringify(packageJson.author.url),
            "process.env.API_URL": JSON.stringify("http://localhost:3000/")
        }),
        new CleanWebpackPlugin("./dist"),
        new ExtractTextPlugin({
            filename: `[name]`,
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: "./img/",
                to: "img/"
            },
            {
                from: "./favicon.ico",
                to: "./"
            },
            {
                from: "./manifest.json",
                to: "./"
            }
        ]),
        new StyleLintPlugin()
    ].concat(isDev ? [] : [new webpack.optimize.UglifyJsPlugin()]),
    module: {
        loaders: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    fix: true,
                    emitWarning: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env"],
                    plugins: [
                        "transform-object-rest-spread"
                    ]
                }
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: "postcss",
                                plugins: loader => [
                                    require("autoprefixer")(),
                                    require("cssnano")({ zindex: false })
                                ]
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]"
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false"
                ]
            },
        ]
    },
    resolve: {
        extensions: [".js"],
        alias: {
            api: path.resolve(__dirname, "./api")
        }
    }
};

module.exports = [node, web];
