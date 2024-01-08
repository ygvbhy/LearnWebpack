var path = require("path"); // node.js 의 모듈 문법
// https://nodejs.org/api/path.html

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
