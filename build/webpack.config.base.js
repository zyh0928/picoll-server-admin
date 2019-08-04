// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyPlugin = require("copy-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require("terser-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const distPath = path.join(process.cwd(), "dist");

module.exports = {
  mode: "production",
  entry: path.join(process.cwd(), "src/index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /^node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    plugins: [new TsconfigPathsPlugin()]
  },
  target: "node",
  optimization: {
    // minimize: !1
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // eslint-disable-next-line @typescript-eslint/camelcase
          keep_classnames: !0,
          // eslint-disable-next-line @typescript-eslint/camelcase
          keep_fnames: !0
        }
      })
    ]
  },
  output: {
    filename: "index.js",
    path: distPath
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.join(process.cwd(), ".env*"),
        to: distPath
      }
    ]),

    new FilterWarningsPlugin({
      exclude: [/Module not found/, /Critical dependency/]
    })
  ]
};
