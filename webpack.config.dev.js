const path = require("path");
const DistCopyPlugin = require("./DistCopyWebpackPlugin");

module.exports = {
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "honeyboo/src")],
    },
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "./honeyboo/src/index.js"),
    },
    // devServer: {
    //     static: path.resolve(__dirname, "./dist"),
    //     hot: false,
    //     liveReload: true,
    //     devMiddleware: {
    //         writeToDisk: true,
    //     },
    //     port: 9091,
    // },
    //devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "honeyboo.js",
        clean: true,
        libraryTarget: "umd",
        library: "HoneyBoo",
    },
    plugins: [
        new DistCopyPlugin({
            target: "../township-hp-boo/honeyboo",
        }),
    ],
};