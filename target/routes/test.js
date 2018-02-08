"use strict";

module.exports = function (done) {

    $.router.get('/', function (req, res, next) {
        res.end("现在是北京视觉 ${new Data()}");
    });

    done();
};