'use strict';

require('mocha');
var expect = require('expect.js');
var utils = require('../lib/utils');

describe('Utils', function() {

    it('should be Lodash', function() {
        expect(utils.name).to.be('lodash');
    });


    describe('readDir', function() {

        var fs = require('fs');
        var path = require('path');
        var dummyFolder = path.resolve( __dirname, 'dummy');
        beforeEach(function(){
            fs.mkdirSync(dummyFolder);
        });
        afterEach(function(){
            fs.rmdirSync(dummyFolder);
        });
        it('should return an array of folders names', function() {
            expect(utils.readDir(__dirname)).to.have.length(1);
        });
    });

    describe('parseOption', function() {
        var option = {
            force: {
                type: 'flag',
                aliases: ['f'],
                description: 'force',
                default: false
            }
        };

        it('should return a cliparser object', function() {
            expect(utils.parseOption(option).parser).to.be.a(Function);
        });

        it('should not parse empty option', function() {
            expect(utils.parseOption).withArgs({}).to.throwException();
        });

    });


});
