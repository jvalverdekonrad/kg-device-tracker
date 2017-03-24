const ENV     = require('yargs').argv.ENV;

var webpackConfig = {};

switch (ENV) {
    case 'prod':
    case 'production':
        webpackConfig = require('./webpack/webpack.production.config');
        break;
    case 'dev':
    case 'development':
    default:
        webpackConfig = require('./webpack/webpack.development.config');
        break;
};

module.exports = webpackConfig;