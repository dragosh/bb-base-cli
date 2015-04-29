'use strict';

require('mocha');
var expect = require('expect.js');
var base = require('../');
var CLI = require('../lib/cli');

describe('Base-CLI api', function() {
    describe('createCli', function() {
        var myCli;
        it('should be a function', function() {
            expect(base.createCli).to.be.a(Function);
        });
        it('should create an instance of CLI', function() {
            myCli = base.createCli('mycli');
            expect(myCli).to.be.a(CLI);
        });
        it('should have the correct name', function() {
            expect(myCli.name).to.be('mycli');
        });
    });

    describe('createCmd', function() {
        it('should be a function', function() {
            expect(base.createCmd).to.be.a(Function);
        });
    });
});
