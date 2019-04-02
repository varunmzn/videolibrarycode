var list = require('../controller/filterController');

exports.default = function (app) {

    app.route('/filter').get(list.filterList);

    app.route('/getListById').get(list.getListById);

    return (app)
}