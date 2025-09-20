//https://webpack.js.org/plugins/copy-webpack-plugin/
const fileCopy = require("./fileCopy.js");

class DistCopyPlugin {
    constructor(options) {
        console.log("constructor", options);

        this.options = options;

        if (this.options.target !== "") {
            console.log(
                "********DistCopyPlugin - Custom webpack plugin Initialized "
            );
        }
    }

    apply(compiler) {
        console.log("********DistCopyPlugin - apply Started... ");
        compiler.hooks.done.tap("DistCopyPlugin", (stats) => {
            if (this.options.target != "") {
                console.log("********DistCopyPlugin - Copy Started... ");
                console.log(`Target folder:${this.options.target}`);
                const copyObj = new fileCopy(this.options.target);
            }
        });
    }
}

module.exports = DistCopyPlugin;
