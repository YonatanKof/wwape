// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Product', // Required
        baseDir: './content/prods', // Where .md files are located
        pathPrefix: '/product', // Add route prefix. Optional
        template: './src/templates/Product.vue' // Optional
      }
    }
  ]
}
