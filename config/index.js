'use strict';

let env = process.env.NODE_ENV || 'development';

let defaults = {
  env: env,
  port: process.env.PORT || 8000,
  host: 'localhost'
};

module.exports = Object.assign(defaults, require('./' + env + '.js') || {});
