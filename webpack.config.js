module.exports = {
  entry: "./src/assets/js/index.js",
  output: {
    path: `${__dirname}/public/assets/js/`,
    filename: "main.js",
  },
  // 開発時
  //   mode: "development",
  // 本番時
  mode: "production",

  devServer: {
    contentBase: "public",
    open: true,
  },
};
