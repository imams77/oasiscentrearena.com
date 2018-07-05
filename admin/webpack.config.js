const Vue2Crumbs = require('vue-2-crumbs')
module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: [/\.scss$/, /\.sass$/],
        use: [
          'sass-loader',
          'css-loader',
          'vue-style-loader'
        ]
      }
    ]
  },
  plugins: [
    new Vue2Crumbs()
  ]
  // plugin omitted
}