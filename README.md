1. added package.json
2. added webpack.config.dev
3: webpack.config.dev: added plugins:DistCopyPlugin
4: command: npm start
5: error:Missing script: "start"
6: added start script to package.json
7: error: 'webpack' is not recognized as an internal or external command,
8: added "webpack": "^5.95.0" to package.json
9: installed npm
10: added gitignore to project
11: installed webpack-cli
12: installed webpack-dev-server
13: error:  Failed to load 'C:\Repos\boo-game-fw\webpack.config.dev.js' config
14: error: ReferenceError: DistCopyPlugin is not defined
15: added DistCopyWebpackPlugin.js
16: referenced DistCopyWebpackPlugin in webpack.config.dev.js
17: added constructor to DistCopyWebpackPlugin.js
18: exported DistCopyPlugin;
19: error: configuration.plugins[1] misses the property 'apply'.
20: added apply function to DistCopyPlugin
21: defined options in constuctor of DistCopyPlugin
22: error: [webpack-dev-middleware] ReferenceError: fileCopy is not defined
23: added fileCopy.js
24: error: [webpack-dev-middleware] ReferenceError: copydir is not defined
25: added "copy-dir": "^1.3.0", to package.json
26: reinstall npm
27: Error: ENOENT: no such file or directory, lstat 'C:\Repos\boo-game-fw\dist'
28: added folder called dist
