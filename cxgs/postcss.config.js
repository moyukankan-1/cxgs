module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视窗得宽度，对应的是设计稿的宽度
      viewportHeight: 667, //视窗得高度，对应的是设计稿的高度
      unitPrecision: 5, //指定px转换为视窗单位值得小数位数
      viewportUnit: "vw", //指定需要转换成的视窗单位
      minPixelValue: 1, //小于或等于1px不转换为视窗单位
      mediaQuery: false //允许在媒体查询中转换成px
    }
  }
}