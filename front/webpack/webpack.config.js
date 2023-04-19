const path = require(`path`)
module.exports = {
    mode: "none",
    entry : "./src/index2.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,'dist')
    }
}