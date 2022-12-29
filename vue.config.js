const BASE_URL = process.env.NODE_ENV === "production" ? "/Blog/" : "/";

module.exports = {
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
}
