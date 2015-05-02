'use strict';
/*----------------------------------------------------------------*/
/* Public
/*----------------------------------------------------------------*/

/**
 * Create CLI object instance
 * @param  {string}   name   CLI name
 * @param  {object}   params  options/arguments/description
 * @param  {Function} cb     Callback
 * @return {object}          cliparser object
 */
exports.createCli = function(name, params, cb) {
    var CLI = require('./lib/cli');
    return new CLI(name, params, cb);
};

/**
 * Create Commands/subcommands
 * @param  {string}   name   CMD name
 * @param  {obect}   params options/arguments/description
 * @param  {Function} cb     Callback
 * @return {object}          cliparser object
 */
exports.createCmd = function(name, params, cb) {
    var CMD = require('./lib/cmd');
    return new CMD(name, params, cb);
};

/**
 * Lodash + base utils
 * @type {function}
 */
exports.utils = require('./lib/utils');
