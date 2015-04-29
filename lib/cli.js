'use strict';

var cliparse = require('cliparse');
var utils = require('./utils');

module.exports = function CLI(name, params, cb) {
    if (!(this instanceof CLI)) { return new CLI(name, params, cb); }
    params = params || {};
    this.name = name || '';
    this.defaults = utils.defaults( params, {
        name: this.name,
        description: '',
        version: ''
    });
    this.defaults.options = utils.map(params.options, utils.parseOption);
    this.defaults.args = utils.map(params.args, utils.parseArg);
    this.run = function() {
        cliparse.parse(cliparse.cli(this.defaults, cb ));
    };
    return this;
};
