'use strict';

var cliparse = require('cliparse');
var utils = require('./utils');
var ee = require('events').EventEmitter;

var CMD = module.exports = function CMD (name, params, cb) {
    if (!(this instanceof CMD)) { return new CMD(name, params, cb); }
    ee.call(this);
    params = params || {};
    this.name= name || '';
    this.params = utils.defaults( params, {
        description: '',
        version: '',
        helpCommand: false
    });
    this.params.options = utils.map(params.options, utils.parseOption);
    this.params.args = utils.map(params.args, utils.parseArg);
    return cliparse.command( this.name, this.params, cb);
};

utils.inherits(CMD, ee);

// utils.extend(CMD.prototype, {
        // other methods
// });
