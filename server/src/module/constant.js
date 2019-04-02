function define(obj, name, value) {
    Object.defineProperty(obj, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: true
    });
}

exports.responseFlags = {};
exports.responseMessages = {};

//FOR MESSAGES 

define(exports.responseMessages, 'ACTION_COMPLETE', 'Action complete.');
define(exports.responseMessages, 'ERROR_IN_EXECUTION', 'Error in execution.');

define(exports.responseFlags, 'ERROR_IN_EXECUTION', 404);
define(exports.responseFlags, 'ACTION_COMPLETE', 200);
