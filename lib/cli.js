'use strict';

var cliparse = require('cliparse');
var ee = require('events').EventEmitter;
var utils = require('./utils');

var CLI = module.exports = function CLI(name, params, cb) {
    if (!(this instanceof CLI)) { return new CLI(name, params, cb); }
    ee.call(this);
    params = params || {};
    this.name = name || '';
    this.cb = cb;
    this.params = utils.defaults( params, {
        name: this.name,
        description: '',
        version: ''
    });
    this.params.options = utils.map(params.options, utils.parseOption);
    this.params.args = utils.map(params.args, utils.parseArg);
    return this;
};
utils.inherits(CLI, ee);

CLI.prototype.run = function run() {
    cliparse.parse(cliparse.cli(this.params, this.cb ));
    return this;
};

// utils.extend(CLI.prototype, {

// });

