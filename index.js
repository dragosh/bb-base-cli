'use strict';
/*----------------------------------------------------------------*/
/* Public
/*----------------------------------------------------------------*/

/**
 * [createCli description]
 * @param  {[type]}   name   [description]
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.createCli = function(name, params, cb) {
    var CLI = require('./lib/cli');
    return new CLI(name, params, cb);
};
/**
 * [createCmd description]
 * @param  {[type]}   name   [description]
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.createCmd = function(name, params, cb) {
    var CMD = require('./lib/cmd');
    return new CMD(name, params, cb);
};

/**
 * [readDir description]
 * @param  {[type]} currDir [description]
 * @return {[type]}         [description]
 */
exports.utils = require('./lib/utils');
