module.exports = {
    mode: process.env.NODE_ENV == "development" ? "development" : "production",
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist/",
        filename: "index.js"
    }
}
