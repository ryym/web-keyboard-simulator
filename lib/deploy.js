var ghpages = require('gh-pages');
var config = require('../webpack.config');

var logger = console.error.bind(console);
ghpages.publish(config.output.path, logger);
