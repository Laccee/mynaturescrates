const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/your-production-path/' : '/',

  outputDir: 'dist',

  assetsDir: 'static',

  devServer: {
    proxy: 'http://localhost:3000', // Adjust this to your backend server's URL
    port: 8080,
    open: true
  },

  css: {
    sourceMap: true
  }
});
