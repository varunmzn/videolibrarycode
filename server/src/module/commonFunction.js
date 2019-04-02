const request = require("request");

exports.request = (url, method, body = {}) => new Promise((resolve, reject) => {
    request.get({ url }, function (err, resp, body) {
        if (err) reject(err);
        else resolve(body);
    })
})