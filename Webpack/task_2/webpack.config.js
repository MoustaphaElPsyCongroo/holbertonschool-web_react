const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassingOnDebug: true,
            },
          },
        ],
      },
    ]
  }
}
