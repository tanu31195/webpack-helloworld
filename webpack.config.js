const path = require("path");

module.exports = {
    mode: "development",
    // devtool: "none", //removes eval code in main.js
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}
