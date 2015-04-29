'use strict';
var cliparse = require('cliparse');
var parsers = cliparse.parsers;
var _ = require('lodash').noConflict();


function parseType(type) {
    var parser = parsers.stringParser;
    switch (type) {
        // #TODO add custom types
        case 'flag':
            parser = parsers.booleanParser;
            break;
        case 'int':
            parser = parsers.intParser;
            break;
    }
    return parser;
}

exports.parseArg = function(arg) {

    if (_.isEmpty(arg)) {
        throw new Error('Unable to parse argument!');
    }
    var name = _.keys(arg)[0];
    var args = arg[name];

    arg.parse = parseType(args.type);

    return cliparse.argument(name, arg[name]);
};

exports.parseOption = function(option) {
    if (_.isEmpty(option)) {
        throw new Error('Unable to parse option!');
    }
    var name = _.keys(option)[0];
    var opts = option[name];
    opts.parse = parseType(opts.type);
    return cliparse.option(name, option[name]);
};

/**
 * [readDir description]
 * @param  {[type]} currDir [description]
 * @return {[type]}         [description]
 */
exports.readDir = function(currDir) {
    currDir = currDir || __dirname;
    var fs = require('fs');
    var path = require('path');
    var dirs = [];

    function isVisible(p) {
        return (/(^|.\/)\.+[^\/\.]/g).test(p) === false;
    }
    fs.readdirSync(currDir).map(function(file) {
        return path.join(currDir, file);
    }).filter(function(file) {
        return fs.statSync(file).isDirectory();
    }).forEach(function(file) {
        dirs.push(file.slice(file.lastIndexOf(path.sep) + 1));
    });

    return dirs.filter(isVisible);
};

_.mixin(exports);

module.exports = _;
