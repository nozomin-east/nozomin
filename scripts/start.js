const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../configs/webpack.config.dev');

const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());

const isInteractive = process.stdout.isTTY;
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const port = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  inline: true,
  compress: true,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
  contentBase: resolveApp('dist'),
  watchContentBase: true,
  host: "0.0.0.0",
  disableHostCheck: true
}).listen(port, 'localhost', (err, result) => {
  if (err) {
      return console.log(err);
  }
  if (isInteractive) {
    console.clear();
  }

  console.log(`Listening at localhost:${port}`);
});
