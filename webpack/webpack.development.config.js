const commonConfig = require('./webpack.common.config'),
      path         = require('path'),
      DIST         = '../distribution';

module.exports = Object.assign(commonConfig,
    {
        watch: true,
        devtool: 'source-map',
        devServer: {
            contentBase: path.resolve(__dirname, DIST),
        },
    }
);