const bs = require('browser-sync').create();
const bsConfig = require('../bs-config.js');

Object.assign(bsConfig, { server: 'dist' });

bs.init(bsConfig);
