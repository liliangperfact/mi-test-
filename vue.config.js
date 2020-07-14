module.exports = {
  lintOnSave: false,
  devServer:{
    port:8081,
    hot:true,
    open:true,
    quiet:true,
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        // pathRewrite: {"^/api" : ""}
        changeOrigin:true
      }
    },
  }
}