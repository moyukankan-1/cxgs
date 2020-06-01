const {resolve} = require('path')

module.exports = {
  publicPath: './dist',

  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  assetsDir: '',
  lintOnSave: false,

  // 用于多页配置，默认是 undefined
  pages: {
    index: {
      // 入口文件
      entry: 'src/main.js',　　/*这个是根入口文件*/
      // 输出文件
      filename: 'index.html',
    }
  },

  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  chainWebpack: (config) => {
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js','vue','.json'],
      alias: {
        '@': resolve(__dirname,'./src')
      }
    }
  },

  // CSS 相关选项
  css: {
      // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
      // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
      extract: true,

      // 是否开启 CSS source map？
      sourceMap: false,

      // 为预处理器的 loader 传递自定义选项。比如传递给
      // sass-loader 时，使用 `{ sass: { ... } }`。
      loaderOptions: {
        
      },

      // 为所有的 CSS 及其预处理文件开启 CSS Modules。
      // 这个选项不会影响 `*.vue` 文件。
      modules: false
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  pwa: {},

  // 第三方插件的选项
  pluginOptions: {

  }
}