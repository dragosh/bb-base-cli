var cmd = require('ronin').Command;

var InitCMD = cmd.extend({
    desc: 'This command adds application',

    options: {
        name: 'string',
        force: {
            type: 'boolean',
            alias: 'f'
        }
    },
    help: function () {
        return 'Usage: ' + this.programName + ' ' + this.name + ' [OPTIONS]';
    },

    run: function (name, force) {
        if (!force) {
            throw new Error('--force option is required to remove application');
        }
    }
});

module.exports = InitCMD;
