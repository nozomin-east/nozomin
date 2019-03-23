const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());

module.exports = require('./webpack.config.base')({
  mode: 'production',
});
