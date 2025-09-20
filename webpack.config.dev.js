const DistCopyPlugin = require('./DistCopyWebpackPlugin');
module.exports = {
 plugins:[
    new DistCopyPlugin({
        target: "../township-hp-boo/honeypot"
    })
 ]
}