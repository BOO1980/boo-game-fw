const path = require("path");
//const CopyWebpackPlugin = require("copy-webpack-plugin");
//const ProvidePlugin = require("webpack/lib/ProvidePlugin");
//const DefinePlugin = require("webpack/lib/DefinePlugin");
//const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const DistCopyPlugin = require("./DistCopyWebpackPlugin");
//const packageFile = require("./package.json");

//const frameworkVersion = packageFile.version;

// The below webpack plugin will copy the dist folder to the target folder in the options as shown below
// target - can be set to "" - by default if the copy action is not required

// we need to copy all ui types over, not just one
// its the client build which should clean up e.g. remove the ui folder not required
// const patterns = [];
// const uiTypes = ["common", "default", "jelly", "slotmasters"];
// for (let i = 0; i < uiTypes.length; i++) {
//     patterns.push({
//         from: `honeypot/src/ui/${uiTypes[i]}/images`,
//         to: `ui/${uiTypes[i]}/images`,
//         globOptions: {
//             ignore: ["**/.DS_Store", "**/*.txt", "**/*.bak"],
//         },
//     });
//     patterns.push({
//         from: `honeypot/src/ui/${uiTypes[i]}/sounds`,
//         to: `ui/${uiTypes[i]}/sounds`,
//         globOptions: {
//             ignore: ["**/.DS_Store", "**/*.txt", "**/*.bak"],
//         },
//     });
//     patterns.push({
//         from: `honeypot/src/ui/${uiTypes[i]}/fonts`,
//         to: `ui/${uiTypes[i]}/fonts`,
//         globOptions: {
//             ignore: ["**/.DS_Store", "**/*.txt", "**/*.bak"],
//         },
//     });
//     patterns.push({
//         from: `honeypot/src/ui/${uiTypes[i]}/base64`,
//         to: `ui/${uiTypes[i]}/base64`,
//         globOptions: {
//             ignore: ["**/.DS_Store", "**/*.txt", "**/*.bak"],
//         },
//     });
//     patterns.push({
//         from: `honeypot/src/ui/${uiTypes[i]}/locales`,
//         to: `ui/${uiTypes[i]}/locales`,
//         globOptions: {
//             ignore: ["**/.DS_Store", "**/*.txt", "**/*.bak"],
//         },
//     });
//     patterns.push({
//         from: `honeypot/src/ui/${uiTypes[i]}/phrases`,
//         to: `ui/${uiTypes[i]}/phrases`,
//         globOptions: {
//             ignore: ["**/.DS_Store", "**/*.txt", "**/*.bak"],
//         },
//     });
//     patterns.push({
//         from: `honeypot/src/ui/${uiTypes[i]}/uiConfig.js`,
//         to: `ui/${uiTypes[i]}/uiConfig.js`,
//         globOptions: {
//             ignore: ["**/.DS_Store", "**/*.txt", "**/*.bak"],
//         },
//     });
// }

// patterns.push({
//     from: "honeypot/src/phrases",
//     to: "phrases",
//     globOptions: {
//         ignore: ["**/.DS_Store", "**/*.txt", "**/*.bak"],
//     },
// });

// patterns.push({
//     from: "honeypot/src/config/platform",
//     to: "config/platform",
//     globOptions: {
//         ignore: ["**/.DS_Store", "**/*.txt", "**/*.bak"],
//     },
// });

module.exports = {
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "honeyboo/src")],
    },
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "./honeypot/src/index.js"),
    },
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        hot: false,
        liveReload: true,
        devMiddleware: {
            writeToDisk: true,
        },
        port: 9090,
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "honeyboo.js",
        clean: true,
        libraryTarget: "umd",
        library: "HoneyBoo",
    },
    module: {
        rules: [
        ],
    },
    plugins: [
        // new DefinePlugin({
        //     PROD_BUILD: JSON.stringify(false),
        //     DEV_BUILD: JSON.stringify(true),
        //     FRAMEWORK_VERSION: JSON.stringify(frameworkVersion),
        // }),
        // new CopyWebpackPlugin({
        //     patterns: patterns,
        // }),
        // new ProvidePlugin({
        //     PIXI: "pixi.js",
        // }),
        // new BundleAnalyzerPlugin({
        //     defaultSizes: "stat",
        // }),
        new DistCopyPlugin({
            target: "../DigginForDiamonds2/honeyboo",
        }),
    ],
};
