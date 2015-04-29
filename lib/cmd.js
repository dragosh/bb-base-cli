'use strict';

var cliparse = require('cliparse');
var utils = require('./utils');

module.exports = function CMD (name, params, cb) {
    if (!(this instanceof CMD)) { return new CMD(name, params, cb); }
    params = params || {};
    this.name= name || '';
    this.defaults = utils.defaults( params, {
        description: '',
        version: '',
        helpCommand: false
    });
    this.defaults.options = utils.map(params.options, utils.parseOption);
    this.defaults.args = utils.map(params.args, utils.parseArg);
    return cliparse.command( this.name, this.defaults, cb);
};
