module.exports = {
   entry : "./app/index.js",
   output: {
      filename: "./bundle.js"
   },
   module: {
      rules: [ {
         test: /\.(js|jsx)$/,
         loader: "babel-loader",
         exclude: [ /node_modules/ ],
         options: {
            presets: [ "react", "env", "stage-0"]
         }
      } ]
   },
   resolve: {
      modules: [
         'app',
         'node_modules'
      ]
   },
   devServer: {
      open: true,
      historyApiFallback: true
   }
};