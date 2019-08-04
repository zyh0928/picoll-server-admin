// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require("./webpack.config.base");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require("webpack-merge");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");

module.exports = merge(base, {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("test")
    })
  ]
});
