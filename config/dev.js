'use strict';

module.exports = function (set, get, has) {
    console.log('dev env trigger')
    set('db.mongodb','mongodb://127.0.0.1/practice_nodejs_project');
};