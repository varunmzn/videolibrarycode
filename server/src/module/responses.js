let constants = require('./constant');

exports.sendError = function (res, err) {
    let response = {
        response: err,
        message: constants.responseMessages.ERROR_IN_EXECUTION
    };
    res.status(constants.responseFlags.ERROR_IN_EXECUTION).json(response);
}

exports.success = function (res, values) {
    let response = {
        response: values,
        message: constants.responseMessages.ACTION_COMPLETE
    };
    res.status(constants.responseFlags.ACTION_COMPLETE).json(response);
}

