module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // run on all .js files
        loader: 'babel-loader', // which webpack loader to run for transpiling
        exclude: /node_modules/, // directories we do not want babel to run on
        options: { // options for babel transpile
          presets: [
            'react', // transpile JSX
            'stage-0', // transpile async code
            ['env', { targets: { browsers: ['last 2 versions'] } }] // transpile in order to meet the requirements of the last 2 versions of every popular browser
          ]
        } 
      }
    ]
  }
};
