const copydir = require("copy-dir");

const target = "";

class fileCopy {
    constructor(target) {
        console.log("fileCopy - constructor", target);
        this.src = "./dist";
        this.target = target; // "D:\\Repos\\brightlightcity\\honeypot";
        this.copy(this.src, this.target);
    }

    copyFiles(src, target) {
        console.log("fileCopy - copyFiles");
        console.log(`Copying files from ${src} to ${target}`);
        copydir(
            src,
            target,
            {
                utimes: true, // keep add time and modify time
                mode: true, // keep file mode
                cover: true, // cover file when exists, default is true
            },
            (err) => {
                if (err) {
                    throw err;
                }
                console.log(
                    `Copy Complete: Dist folder copied to  ${this.target}`
                );
            }
        );
    }
}
module.exports = fileCopy;
